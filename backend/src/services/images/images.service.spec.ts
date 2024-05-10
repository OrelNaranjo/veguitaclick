import { Test, TestingModule } from '@nestjs/testing';
import { ImagesService } from './images.service';
import { Image } from '../../entities/image.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ImageService', () => {
  let service: ImagesService;
  let repo: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImagesService,
        {
          provide: getRepositoryToken(Image),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Image()),
            create: jest.fn().mockReturnValue(new Image()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ImagesService>(ImagesService);
    repo = module.get(getRepositoryToken(Image));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
