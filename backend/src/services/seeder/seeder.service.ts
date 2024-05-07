import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from '../../entities/roles.entity';
import { Users } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Privileges } from '../../entities/privileges.entity';

@Injectable()
export class SeederService {

  constructor(
    @InjectRepository(Privileges)
    private privilegesRepository: Repository<Privileges>,
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) { }

  async dataSeeder(): Promise<void> {

    // Poblar tabla de privilegios y el usuario Administrador
    const seederPrivileges: Partial<Privileges>[] = [
      { name: 'login', description: 'Iniciar sesión' },
      { name: 'create_user', description: 'Crear usuario' },
      { name: 'read_users', description: 'Leer usuarios' },
      { name: 'update_user', description: 'Actualizar usuario' },
      { name: 'delete_user', description: 'Eliminar usuario' },
      { name: 'create_role', description: 'Crear rol' },
      { name: 'read_role', description: 'Leer rol' },
      { name: 'update_role', description: 'Actualizar rol' },
      { name: 'delete_role', description: 'Eliminar rol' },
      { name: 'create_privilege', description: 'Crear privilegio' },
      { name: 'read_privilege', description: 'Leer privilegio' },
      { name: 'update_privilege', description: 'Actualizar privilegio' },
      { name: 'delete_privilege', description: 'Eliminar privilegio' },
    ];
    const savedPrivileges = await this.privilegesRepository.save(seederPrivileges);


    const adminPrivileges = ['create_user', 'read_user', 'update_user', 'delete_user'];
    const userPrivileges = ['login'];
    const filteredAdminPrivileges = savedPrivileges.filter(privilege => adminPrivileges.includes(privilege.name));
    const filteredUserPrivileges = savedPrivileges.filter(privilege => userPrivileges.includes(privilege.name));
    const seederRoles: Partial<Roles>[] = [
      { name: 'admin', description: 'Administrador', privileges: filteredAdminPrivileges },
      { name: 'user', description: 'Usuario', privileges: filteredUserPrivileges }
    ];
    const savedRoles = await this.rolesRepository.save(seederRoles);
    const seederUsers: Partial<Users>[] = [
      { username: 'admin', email: 'admin@laveguitaclick.cl', password: await bcrypt.hash('admin', 10), roles: savedRoles },
      { username: 'user', email: 'user@laveguitaclick.cl', password: await bcrypt.hash('user', 10), roles: savedRoles }
    ];

    try {
      await this.usersRepository.save(seederUsers);
      Logger.log('Base de datos poblada correctamente');
    } catch (error) {
      throw new Error('Error al poblar la base de datos');
    }
  }
}
