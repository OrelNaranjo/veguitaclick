import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/user/create-user.dto';
import { UpdateUserDto } from '../../dtos/user/update-user.dto';
import { Users } from '../../entities/users.entity';
import { Roles } from 'src/entities/roles.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) { }

  async create(user: CreateUserDto): Promise<Partial<Users>> {
    const newUser = new Users();
    newUser.username = user.username;
    newUser.email = user.email;
    newUser.password = bcrypt.hashSync(user.password, 10);

    if (user.roles) {
      const roles = await this.roleRepository.find({ where: { id: In(user.roles) } });
      newUser.roles = roles;
    }
    const savedUser = await this.userRepository.save(newUser);

    const { password, ...result } = savedUser;
    return result;
  }

  async findAll() {
    return this.userRepository.find({ select: ['id', 'username', 'email', 'roles'] });
  }

  async findOneByUsername(username: string): Promise<Users> {
    return this.userRepository.findOne({ where: { username }, relations: ['roles', 'roles.privileges'] });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (updateUserDto.roles !== undefined) {
      user.roles = await this.roleRepository.find({
        where: { id: In(updateUserDto.roles) },
      });
    }
    await this.userRepository.save(user);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    await this.userRepository.remove(user);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}