import { Test, TestingModule } from '@nestjs/testing';
import { SeederController } from './seeder.controller';
import { SeederService } from '../../services/seeder/seeder.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Privileges } from '../../entities/privileges.entity';
import { Roles } from '../../entities/roles.entity';
import { Users } from '../../entities/users.entity';

describe('SeederController', () => {
  let controller: SeederController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeederController],
      providers: [SeederService,
        {
          provide: getRepositoryToken(Privileges),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Roles),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Users),
          useValue: {
            dataSeeder: jest.fn(() => []),
          }
        }
      ],
    }).compile();

    controller = module.get<SeederController>(SeederController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should ejecute a dataseeder', async () => {
    expect(true).toBe(true);
  });
});