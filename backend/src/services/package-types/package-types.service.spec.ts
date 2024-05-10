import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypeService } from './package-types.service';
import { PackageTypes } from '../../entities/package-type.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PackageTypeService', () => {
  let service: PackageTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackageTypeService,
        {
          provide: getRepositoryToken(PackageTypes),
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

    service = module.get<PackageTypeService>(PackageTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
