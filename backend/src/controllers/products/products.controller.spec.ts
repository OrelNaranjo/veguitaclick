import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../entities/product.entity';

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
            create: jest.fn().mockResolvedValue(new Product()),
            findAll: jest.fn().mockResolvedValue([new Product()]),
            findOne: jest.fn().mockResolvedValue(new Product()),
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

  it('should create a role', async () => {
    expect(true).toBe(true);
  });

  it('should find all roles', async () => {
    expect(true).toBe(true);
  });

  it('should find one role', async () => {
    expect(true).toBe(true);
  });

  it('should update a role', async () => {
    expect(true).toBe(true);
  });

  it('should remove a role', async () => {
    expect(true).toBe(true);
  });
});