import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegesController } from './privileges.controller';
import { PrivilegeService } from '../../services/privilege/privilege.service';

describe('PrivilegesController', () => {
  let controller: PrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivilegesController],
      providers: [PrivilegeService],
    }).compile();

    controller = module.get<PrivilegesController>(PrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
