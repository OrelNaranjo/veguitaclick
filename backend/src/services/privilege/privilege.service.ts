import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrivilegeDto } from '../../dtos/privilege/create-privilege.dto';
import { UpdatePrivilegeDto } from '../../dtos/privilege/update-privilege.dto';
import { Privileges } from '../../entities/privileges.entity';

@Injectable()
export class PrivilegeService {
  constructor(
    @InjectRepository(Privileges)
    private privilegeRepository: Repository<Privileges>,
  ) {}

  async create(createPrivilegeDto: CreatePrivilegeDto) {
    const privilege = this.privilegeRepository.create(createPrivilegeDto);
    await this.privilegeRepository.save(privilege);
    return privilege;
  }

  findAll() {
    return this.privilegeRepository.find();
  }

  findOne(id: number) {
    return this.privilegeRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePrivilegeDto: UpdatePrivilegeDto) {
    const privilege = await this.privilegeRepository.findOneBy({ id: id });
    await this.privilegeRepository.save({ ...privilege, ...updatePrivilegeDto });
    return privilege;
  }

  async remove(id: number) {
    const privilege = await this.privilegeRepository.findOneBy({ id: id });
    await this.privilegeRepository.remove(privilege);
    return privilege;
  }
}