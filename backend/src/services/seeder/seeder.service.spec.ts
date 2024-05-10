import { Test, TestingModule } from '@nestjs/testing';
import { SeederService } from './seeder.service';
import { Privileges } from '../../entities/privileges.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Roles } from '../../entities/roles.entity';
import { User } from '../../entities/user.entity';
import { Product } from '../../entities/product.entity';
import { PackageType } from '../../entities/package-type.entity';
import { Image } from '../../entities/image.entity';
import { Category } from '../../entities/category.entity';
import { Supplier } from '../../entities/supplier.entity';
import { Employee } from '../../entities/employee.entity';

describe('SeederService', () => {
  let service: SeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeederService,
        {
          provide: getRepositoryToken(Privileges),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Roles),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Product),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(PackageType),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Image),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Category),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Supplier),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Employee),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
      ],
    }).compile();

    service = module.get<SeederService>(SeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
