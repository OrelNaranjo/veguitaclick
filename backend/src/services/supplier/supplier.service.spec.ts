import { Test, TestingModule } from '@nestjs/testing';
import { SupplierService } from './supplier.service';
import { Suppliers } from '../../entities/suppliers.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SupplierService', () => {
  let service: SupplierService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierService, 
        {
          provide: getRepositoryToken(Suppliers),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Suppliers()),
            create: jest.fn().mockReturnValue(new Suppliers()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SupplierService>(SupplierService);
    repo = module.get(getRepositoryToken(Suppliers));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
