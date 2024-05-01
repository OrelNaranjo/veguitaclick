import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductService } from '../../services/product/product.service';
import { CreateProductDto } from '../../dtos/product/create-product.dto';
import { Products } from '../../entities/products.entity';
import { UpdateProductDto } from '../../dtos/product/update-product.dto';

describe('productsController', () => {
  let controller: ProductsController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            create: jest.fn().mockResolvedValue(new Products()),
            findAll: jest.fn().mockResolvedValue([new Products()]),
            findOne: jest.fn().mockResolvedValue(new Products()),
            update: jest.fn().mockResolvedValue('El product ha sido actualizado exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    const dto: CreateProductDto = {
      barcode: '123456',
      sku: 'sku123',
      name: 'Test',
      description: 'Test description',
      price: 100,
      cost: 90,
      discontinued: false,
      min_stock: 10,
      max_stock: 100,
      is_selleable: true,
      is_purchase: true,
      weight: 1,
      width: 1,
      height: 1,
      length: 1,
      categoryId: 1,
      imageId: 1,
    };
    const result = await controller.create(dto);
    expect(result).toBeInstanceOf(Products);
  });

  it('should return all products', async () => {
    const result = await controller.findAll();
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Products);
  });

  it('should return one product', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toBeInstanceOf(Products);
  });

  it('should update a product', async () => {
    const id = '1';
    const dto: UpdateProductDto = { name: 'Test Updated' };
    const result = await controller.update(id, dto);
    expect(result).toBe('El product ha sido actualizado exitosamente.');
  });

  it('should remove a product', async () => {
    const id = '1';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});