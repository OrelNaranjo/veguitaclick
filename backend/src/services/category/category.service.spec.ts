import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { Categories } from '../../entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CategoryService', () => {
  let service: CategoryService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService,
        {
          provide: getRepositoryToken(Categories),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Categories()),
            create: jest.fn().mockReturnValue(new Categories()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    repo = module.get(getRepositoryToken(Categories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
