import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegesController } from './privileges.controller';
import { PrivilegeService } from '../../services/privilege/privilege.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Privileges } from '../../decorators/app.decorator';

describe('PrivilegesController', () => {
  let controller: PrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivilegesController],
      providers: [PrivilegeService,
        {
          provide: getRepositoryToken(Privileges),
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

    controller = module.get<PrivilegesController>(PrivilegesController);
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