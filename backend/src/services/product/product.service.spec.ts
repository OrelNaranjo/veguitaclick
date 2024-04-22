import { Test, TestingModule } from '@nestjs/testing';
import { productService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { product } from '../../entities/product.entity';
import { CreateproductDto } from '../../dtos/create-product.dto';
import { UpdateproductDto } from '../../dtos/update-product.dto';

describe('productService', () => {
  let service: productService;
  let repo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        productService,
        {
          provide: getRepositoryToken(product),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new product()),
            create: jest.fn().mockReturnValue(new product()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<productService>(productService);
    repo = module.get(getRepositoryToken(product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', async () => {
    await service.findAll();
    expect(repo.find).toHaveBeenCalled();
  });

  it('should return one product', async () => {
    const testId = 1;
    await service.findOne(testId);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: testId });
  });

  it('should create a product', async () => {
    const newproduct: CreateproductDto = {
      codigo_barra: '123456',
      sku: 'sku123',
      nombre: 'Test',
      descripion: 'Test description',
      precio: 100,
      descontinuado: false,
      se_vende: true,
      se_compra: true,
      stock_minimo: 10,
      stock_maximo: 50,
      embalaje: 'box',
      peso: 1,
      ancho: 10,
      alto: 10,
      largo: 10,
    };
    await service.create(newproduct);
    expect(repo.create).toHaveBeenCalledWith(newproduct);
    expect(repo.save).toHaveBeenCalled();
  });

it('should update a product', async () => {
    const updateproductDto: UpdateproductDto = { nombre: 'Test Updated' };
    const existingproduct = { id: 1, nombre: 'Test' };
    repo.findOneBy.mockResolvedValue(existingproduct);
    await service.update(existingproduct.id, updateproductDto);
    expect(repo.save).toHaveBeenCalledWith({ ...existingproduct, ...updateproductDto });
});

  it('should remove a product', async () => {
    const testId = 1;
    repo.findOneBy.mockResolvedValue({ id: testId });
    await service.remove(testId);
    expect(repo.remove).toHaveBeenCalled();
  });
});
