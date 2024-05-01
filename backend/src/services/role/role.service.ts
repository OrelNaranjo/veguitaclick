import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateRoleDto } from '../../dtos/role/create-role.dto';
import { UpdateRoleDto } from '../../dtos/role/update-role.dto';
import { Roles } from '../../entities/roles.entity';
import { Privileges } from '../../entities/privileges.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
    @InjectRepository(Privileges)
    private privilegeRepository: Repository<Privileges>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const privileges = await this.privilegeRepository.find({
      where: { id: In(createRoleDto.privileges) },
    });
    const role = this.roleRepository.create({ ...createRoleDto, privileges });
    await this.roleRepository.save(role);
    return role;
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOneBy({ id: id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOneBy({ id: id });
    if (updateRoleDto.privileges !== undefined) {
      role.privileges = await this.privilegeRepository.find({
        where: { id: In(updateRoleDto.privileges) },
      });
    }
    await this.roleRepository.save(role);
    return role;
  }

  async remove(id: number) {
    const role = await this.roleRepository.findOneBy({ id: id });
    await this.roleRepository.remove(role);
    return role;
  }
}