import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StoreService } from './store.service';
import { Stores } from '../../entities/stores.entity';
import { Repository } from 'typeorm';

describe('StoreService', () => {
  let service: StoreService;
  let repo: Repository<Stores>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreService,
        {
          provide: getRepositoryToken(Stores),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<StoreService>(StoreService);
    repo = module.get<Repository<Stores>>(getRepositoryToken(Stores));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a store', async () => {
    const store = { id: 1, name: 'Test Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    jest.spyOn(repo, 'create').mockReturnValue(store);
    jest.spyOn(repo, 'save').mockResolvedValue(store);

    expect(await service.create(store)).toEqual(store);
    expect(repo.create).toHaveBeenCalledWith(store);
    expect(repo.save).toHaveBeenCalledWith(store);
  });

  it('should find all stores', async () => {
    const store = { id: 1, name: 'Test Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    jest.spyOn(repo, 'find').mockResolvedValue([store]);

    expect(await service.findAll()).toEqual([store]);
    expect(repo.find).toHaveBeenCalled();
  });

  it('should find one store', async () => {
    const store = { id: 1, name: 'Test Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    jest.spyOn(repo, 'findOneBy').mockResolvedValue(store);

    expect(await service.findOne(1)).toEqual(store);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should update a store', async () => {
    const store = { id: 1, name: 'Test Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    const updatedStore = { id: 1, name: 'Updated Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    jest.spyOn(repo, 'findOneBy').mockResolvedValue(store);
    jest.spyOn(repo, 'save').mockResolvedValue(updatedStore);

    expect(await service.update(1, { name: 'Updated Store' })).toEqual(updatedStore);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
    expect(repo.save).toHaveBeenCalledWith({ ...store, name: 'Updated Store' });
  });

  it('should remove a store', async () => {
    const store = { id: 1, name: 'Test Store', description: 'Test Description', address: 'Test Address', phone: '1234567890' };
    jest.spyOn(repo, 'findOneBy').mockResolvedValue(store);
    jest.spyOn(repo, 'remove').mockResolvedValue(undefined);

    await service.remove(1);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
    expect(repo.remove).toHaveBeenCalledWith(store);
  });
});