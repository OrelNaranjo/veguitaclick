import { Test, TestingModule } from '@nestjs/testing';
import { SeederController } from './seeder.controller';
import { SeederService } from '../../services/seeder/seeder.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Privileges } from '../../entities/privileges.entity';
import { Roles } from '../../entities/roles.entity';
import { User } from '../../entities/user.entity';
import { PackageType } from '../../entities/package-type.entity';
import { Category } from '../../entities/category.entity';
import { Supplier } from '../../entities/supplier.entity';
import { Employee } from '../../entities/employee.entity';
import { Image } from '../../entities/image.entity';
import { Product } from '../../entities/product.entity';

describe('SeederController', () => {
  let controller: SeederController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeederController],
      providers: [SeederService,
        {
          provide: getRepositoryToken(Privileges),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Roles),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(User),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(PackageType),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Image),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Category),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Supplier),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Employee),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Product),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
      ],
    }).compile();

    controller = module.get<SeederController>(SeederController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});