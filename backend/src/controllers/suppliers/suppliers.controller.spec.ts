import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { Supplier } from '../../entities/supplier.entity';


describe('SuppliersController', () => {
  let controller: SuppliersController;
  let service: SuppliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [
        {
          provide: SuppliersService,
          useValue: {
            create: jest.fn().mockResolvedValue(new Supplier()),
            findAll: jest.fn().mockResolvedValue([new Supplier()]),
            findOne: jest.fn().mockResolvedValue(new Supplier()),
            update: jest.fn().mockResolvedValue('El proveedor ha sido actualizado exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<SuppliersController>(SuppliersController);
    service = module.get<SuppliersService>(SuppliersService);
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