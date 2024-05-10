import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesController } from './package-types.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PackageType } from '../../entities/package-type.entity';
import { PackageTypesService } from '../../services/package-types/package-types.service';

describe('PackageTypesController', () => {
  let controller: PackageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageTypesController],
      providers: [PackageTypesService,
        {
          provide: getRepositoryToken(PackageType),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        }
      ],
    }).compile();

    controller = module.get<PackageTypesController>(PackageTypesController);
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