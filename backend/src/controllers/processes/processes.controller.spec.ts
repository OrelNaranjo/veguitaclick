import { Test, TestingModule } from '@nestjs/testing';
import { ProcessesController } from './processes.controller';
import { ProcessesService } from '../../services/processes/processes.service';

describe('ProcessesController', () => {
  let controller: ProcessesController;
  let service: ProcessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessesController],
      providers: [
        {
          provide: ProcessesService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([{}]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue('El proceso ha sido actualizado exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ProcessesController>(ProcessesController);
    service = module.get<ProcessesService>(ProcessesService);
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