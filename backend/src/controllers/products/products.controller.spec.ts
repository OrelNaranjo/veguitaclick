import { Test, TestingModule } from '@nestjs/testing';
import { productsController } from './products.controller';
import { productService } from '../../services/product/product.service';
import { CreateproductDto } from '../../dtos/create-product.dto';
import { product } from '../../entities/product.entity';
import { UpdateproductDto } from '../../dtos/update-product.dto';

describe('productsController', () => {
  let controller: productsController;
  let service: productService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [productsController],
      providers: [
        {
          provide: productService,
          useValue: {
            create: jest.fn().mockResolvedValue(new product()),
            findAll: jest.fn().mockResolvedValue([new product()]),
            findOne: jest.fn().mockResolvedValue(new product()),
            update: jest.fn().mockResolvedValue('El product ha sido actualizado exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<productsController>(productsController);
    service = module.get<productService>(productService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    const dto: CreateproductDto = {
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
    const result = await controller.create(dto);
    expect(result).toBeInstanceOf(product);
  });

  it('should return all products', async () => {
    const result = await controller.findAll();
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(product);
  });

  it('should return one product', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toBeInstanceOf(product);
  });

  it('should update a product', async () => {
    const id = '1';
    const dto: UpdateproductDto = { nombre: 'Test Updated' };
    const result = await controller.update(id, dto);
    expect(result).toBe('El product ha sido actualizado exitosamente.');
  });

  it('should remove a product', async () => {
    const id = '1';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});