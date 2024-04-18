import { Test, TestingModule } from '@nestjs/testing';
import { ProductoService } from './producto.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Producto } from '../../entities/producto.entity';
import { CreateProductoDto } from '../../dtos/create-producto.dto';
import { UpdateProductoDto } from '../../dtos/update-producto.dto';

describe('ProductoService', () => {
  let service: ProductoService;
  let repo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductoService,
        {
          provide: getRepositoryToken(Producto),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Producto()),
            create: jest.fn().mockReturnValue(new Producto()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductoService>(ProductoService);
    repo = module.get(getRepositoryToken(Producto));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all productos', async () => {
    await service.findAll();
    expect(repo.find).toHaveBeenCalled();
  });

  it('should return one producto', async () => {
    const testId = 1;
    await service.findOne(testId);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: testId });
  });

  it('should create a producto', async () => {
    const newProducto: CreateProductoDto = {
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
    await service.create(newProducto);
    expect(repo.create).toHaveBeenCalledWith(newProducto);
    expect(repo.save).toHaveBeenCalled();
  });

it('should update a producto', async () => {
    const updateProductoDto: UpdateProductoDto = { nombre: 'Test Updated' };
    const existingProducto = { id: 1, nombre: 'Test' };
    repo.findOneBy.mockResolvedValue(existingProducto);
    await service.update(existingProducto.id, updateProductoDto);
    expect(repo.save).toHaveBeenCalledWith({ ...existingProducto, ...updateProductoDto });
});

  it('should remove a producto', async () => {
    const testId = 1;
    repo.findOneBy.mockResolvedValue({ id: testId });
    await service.remove(testId);
    expect(repo.remove).toHaveBeenCalled();
  });
});
