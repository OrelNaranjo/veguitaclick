import { Test, TestingModule } from '@nestjs/testing';
import { StoresController } from './stores.controller';
import { StoreService } from '../../services/store/store.service';
import { CreateStoreDto } from '../../dtos/store/create-store-dto';
import { UpdateStoreDto } from '../../dtos/store/update-store.dto';

describe('StoresController', () => {
  let controller: StoresController;
  let service: StoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoresController],
      providers: [
        {
          provide: StoreService,
          useValue: {
            create: jest.fn().mockResolvedValue({
              id: 1,
              name: 'Test Store',
              description: 'Test Description',
              address: 'Test Address',
              phone: '1234567890'
            }),
            findAll: jest.fn().mockResolvedValue([{
              id: 1,
              name: 'Test Store',
              description: 'Test Description',
              address: 'Test Address',
              phone: '1234567890'
            }]),
            findOne: jest.fn().mockResolvedValue({
              id: 1,
              name: 'Test Store',
              description: 'Test Description',
              address: 'Test Address',
              phone: '1234567890'
            }),
            update: jest.fn().mockResolvedValue('La tienda ha sido actualizada exitosamente.'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<StoresController>(StoresController);
    service = module.get<StoreService>(StoreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a store', async () => {
    const createStoreDto: CreateStoreDto = {
      name: 'Test Store',
      description: 'Test Description',
      address: 'Test Address',
      phone: '1234567890'
    };
    const result = await controller.create(createStoreDto);
    expect(result).toEqual({
      id: 1,
      name: 'Test Store',
      description: 'Test Description',
      address: 'Test Address',
      phone: '1234567890'
    });
    expect(service.create).toHaveBeenCalledWith(createStoreDto);
  });

  it('should find all stores', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([{
      id: 1,
      name: 'Test Store',
      description: 'Test Description',
      address: 'Test Address',
      phone: '1234567890'
    }]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one store', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toEqual({
      id: 1,
      name: 'Test Store',
      description: 'Test Description',
      address: 'Test Address',
      phone: '1234567890'
    });
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('should update a store', async () => {
    const id = '1';
    const updateStoreDto: UpdateStoreDto = {
      name: 'Test Store Updated'
    };
    const result = await controller.update(id, updateStoreDto);
    expect(result).toBe('La tienda ha sido actualizada exitosamente.');
    expect(service.update).toHaveBeenCalledWith(+id, updateStoreDto);
  });

  it('should remove a store', async () => {
    const id = '1';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});