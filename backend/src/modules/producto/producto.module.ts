import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosController } from 'src/controllers/productos/productos.controller';
import { Producto } from 'src/entities/producto.entity';
import { ProductoService } from 'src/services/producto/producto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Producto])],
    controllers: [ProductosController],
    providers: [ProductoService],
})
export class ProductoModule {}
