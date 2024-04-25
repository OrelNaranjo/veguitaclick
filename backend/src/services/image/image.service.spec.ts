import { Test, TestingModule } from '@nestjs/testing';
import { ImageService } from './image.service';
import { Images } from '../../entities/images.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ImageService', () => {
  let service: ImageService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImageService,
        {
          provide: getRepositoryToken(Images),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Images()),
            create: jest.fn().mockReturnValue(new Images()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ImageService>(ImageService);
    repo = module.get(getRepositoryToken(Images));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
