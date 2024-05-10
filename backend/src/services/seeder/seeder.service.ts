import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from '../../entities/roles.entity';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Privileges } from '../../entities/privileges.entity';
import { Product } from '../../entities/product.entity';
import { PackageType } from '../../entities/package-type.entity';
import { Image } from '../../entities/image.entity';
import { Category } from '../../entities/category.entity';
import { Supplier } from '../../entities/supplier.entity';
import { Employee } from '../../entities/employee.entity';

@Injectable()
export class SeederService {

  constructor(
    @InjectRepository(Privileges)
    private privilegesRepository: Repository<Privileges>,
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(PackageType)
    private packagesRepository: Repository<PackageType>,
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) { }

  async dataSeeder() {
    try {
    // Seeder table categories
    const seederCategories: Partial<Category>[] = [
      { id: 1, name: 'Categoria 1', description: 'Descripción de la categoría 1', is_active: true, parentId: null },
      { id: 2, name: 'Categoria 2', description: 'Descripción de la categoría 2', is_active: true, parentId: 1 },
      { id: 3, name: 'Categoria 3', description: 'Descripción de la categoría 3', is_active: true, parentId: 2 },
    ]
    const savedCategories = await this.categoriesRepository.save(seederCategories);

    // Seeder table package_types
    const seederPackages: Partial<PackageType>[] = [
      { id: 1, name: 'Paquete 1', description: 'Descripción del paquete 1' },
      { id: 2, name: 'Paquete 2', description: 'Descripción del paquete 2' },
      { id: 3, name: 'Paquete 3', description: 'Descripción del paquete 3' },
    ]
    const savedPackages = await this.packagesRepository.save(seederPackages);

    // Seeder table suppliers
    const seederSuppliers: Partial<Supplier>[] = [
      { id: 1, rut: '11.111.111-1', name: 'Proveedor 1', address: 'Dirección del proveedor 1', email: 'orelnaranjo.d@gmail.com', phone: '111111111' },
      { id: 2, rut: '22.222.222-2', name: 'Proveedor 2', address: 'Dirección del proveedor 2', email: 'orelnaranjo@gmail.com', phone: '222222222' },
      { id: 3, rut: '33.333.333-3', name: 'Proveedor 3', address: 'Dirección del proveedor 3', email: 'or.naranjo@duocuc.cl', phone: '333333333' },
    ]
    const savedSuppliers = await this.suppliersRepository.save(seederSuppliers);

    // Seeder table employees
    const seederEmployees: Partial<Employee>[] = [
      { id: 1, run: '11111111-1', name: 'Empleado 1', position: 'Cargo 1', birthDate: new Date('1990-01-01'), email: 'empleado1@empresa.cl', phone: '111111111', address: 'Dirección del empleado 1', contractType: 'indefinite', contractNumber: 1, hireDate: new Date('2021-01-01'), firedDate: null, salary: 1000000, supervisor: null, subordinates: [], status: 'hired' },
    ]
    await this.employeesRepository.save(seederEmployees);

    // Seeder table products
    const seederProducts: Partial<Product>[] = [
      { id: 1, barcode: '0000001', sku: 'PRO001', name: 'Producto 1', description: 'Descripción del producto 1', price: 1000, cost: 500, discontinued: false, is_purchase: true, is_selleable: true, min_stock: 10, max_stock: 100, weight: 1, width: 10, height: 10, length: 10, category: savedCategories[0], packageType: savedPackages[0], supplier: savedSuppliers[0]},
      { id: 2, barcode: '0000002', sku: 'PRO002', name: 'Producto 2', description: 'Descripción del producto 2', price: 2000, cost: 1000, discontinued: false, is_purchase: true, is_selleable: true, min_stock: 10, max_stock: 100, weight: 1, width: 10, height: 10, length: 10, category: savedCategories[1], packageType: savedPackages[1], supplier: savedSuppliers[1]},
      { id: 3, barcode: '0000003', sku: 'PRO003', name: 'Producto 3', description: 'Descripción del producto 3', price: 3000, cost: 1500, discontinued: false, is_purchase: true, is_selleable: true, min_stock: 10, max_stock: 100, weight: 1, width: 10, height: 10, length: 10, category: savedCategories[2], packageType: savedPackages[2], supplier: savedSuppliers[2]},
    ]
    const savedProducts = await this.productsRepository.save(seederProducts);

    // Seeder table images
    const seederImages: Partial<Image>[] = [
      { id: 1, url: 'https://via.placeholder.com/150', alt: 'description 1', product: savedProducts[0] },
      { id: 2, url: 'https://via.placeholder.com/150', alt: 'description 2', product: savedProducts[1] },
      { id: 3, url: 'https://via.placeholder.com/150', alt: 'description 3', product: savedProducts[2] },
    ]
    await this.imagesRepository.save(seederImages);

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
    const seederUsers: Partial<User>[] = [
      { username: 'admin', email: 'admin@laveguitaclick.cl', password: await bcrypt.hash('admin', 10), roles: savedRoles },
      { username: 'user', email: 'user@laveguitaclick.cl', password: await bcrypt.hash('user', 10), roles: savedRoles }
    ];
      await this.usersRepository.save(seederUsers);
      Logger.log('Base de datos poblada correctamente');
      return { message: 'Base de datos poblada correctamente' };
    } catch (error) {
      throw new Error('Error al poblar la base de datos');
    }
  }
}
