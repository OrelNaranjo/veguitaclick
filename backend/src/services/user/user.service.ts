import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/user/create-user.dto';
import { UpdateUserDto } from '../../dtos/user/update-user.dto';
import { Users } from '../../entities/users.entity';
import { Roles } from 'src/entities/roles.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const roles = await this.roleRepository.find({
      where: { id: In(createUserDto.roles) },
    });
    const user = this.userRepository.create({ ...createUserDto, roles });
    await this.userRepository.save(user);
    return user;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (updateUserDto.roles !== undefined) {
      user.roles = await this.roleRepository.find({
        where: { id: In(updateUserDto.roles) },
      });
    }
    await this.userRepository.save(user);
    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    await this.userRepository.remove(user);
    return user;
  }
}