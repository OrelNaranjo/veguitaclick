import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PackageTypesService } from './package-types.service';
import { PackageType } from '../../entities/package-type.entity';

describe('PackageTypeService', () => {
  let service: PackageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackageTypesService,
        {
          provide: getRepositoryToken(PackageType),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    service = module.get<PackageTypesService>(PackageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
