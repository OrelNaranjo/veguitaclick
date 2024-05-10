import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from './suppliers.service';
import { Supplier } from '../../entities/supplier.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SupplierService', () => {
  let service: SuppliersService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuppliersService,
        {
          provide: getRepositoryToken(Supplier),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Supplier()),
            create: jest.fn().mockReturnValue(new Supplier()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
    repo = module.get(getRepositoryToken(Supplier));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
