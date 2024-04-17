import { Module } from '@nestjs/common';
import { ProductoService } from 'src/services/producto/producto.service';

@Module({
    imports: [],
    controllers: [],
    providers: [ProductoService],
})
export class ProductoModule {}
