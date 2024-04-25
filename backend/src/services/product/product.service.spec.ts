import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Products } from '../../entities/products.entity';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { UpdateProductDto } from '../../dtos/update-product.dto';

describe('productService', () => {
  let service: ProductService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Products),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Products()),
            create: jest.fn().mockReturnValue(new Products()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get(getRepositoryToken(Products));
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
    const newproduct: CreateProductDto = {
      barcode: '123456',
      sku: 'sku123',
      name: 'Test',
      description: 'Test description',
      price: 100,
      cost: 50,
      discontinued: false,
      is_selleable: true,
      is_purchase: true,
      min_stock: 10,
      max_stock: 50,
      weight: 1,
      width: 10,
      height: 10,
      length: 10,
      categoryId: null,
      imageId: null,
    };
    await service.create(newproduct);
    expect(repo.create).toHaveBeenCalledWith(newproduct);
    expect(repo.save).toHaveBeenCalled();
  });

it('should update a product', async () => {
    const updateProductDto: UpdateProductDto = { name: 'Test Updated' };
    const existingProduct = { id: 1, name: 'Test' };
    repo.findOneBy.mockResolvedValue(existingProduct);
    await service.update(existingProduct.id, updateProductDto);
    expect(repo.save).toHaveBeenCalledWith({ ...existingProduct, ...updateProductDto });
});

  it('should remove a product', async () => {
    const testId = 1;
    repo.findOneBy.mockResolvedValue({ id: testId });
    await service.remove(testId);
    expect(repo.remove).toHaveBeenCalled();
  });
});
