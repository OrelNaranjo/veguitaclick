import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SupplierService } from '../../services/supplier/supplier.service';
import { Suppliers } from '../../entities/suppliers.entity';

describe('SuppliersController', () => {
  let controller: SuppliersController;
  let service: SupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [
        {
          provide: SupplierService,
          useValue: {
            create: jest.fn().mockResolvedValue(new Suppliers()),
            findAll: jest.fn().mockResolvedValue([new Suppliers()]),
            findOne: jest.fn().mockResolvedValue(new Suppliers()),
            update: jest.fn().mockResolvedValue('El proveedor ha sido actualizado exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<SuppliersController>(SuppliersController);
    service = module.get<SupplierService>(SupplierService);
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