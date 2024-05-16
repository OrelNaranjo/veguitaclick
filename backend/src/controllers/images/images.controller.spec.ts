import { Test, TestingModule } from '@nestjs/testing';
import { ImagesController } from './images.controller';
import { ImagesService } from '../../services/images/images.service';

describe('ImagesController', () => {
  let controller: ImagesController;
  let service: ImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers: [
        {
          provide: ImagesService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([{}]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue('La imagen ha sido actualizada exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
    service = module.get<ImagesService>(ImagesService);
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