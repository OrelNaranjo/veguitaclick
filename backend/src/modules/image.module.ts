import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesController } from '../controllers/images/images.controller';
import { Image } from '../entities/image.entity';
import { ImagesService } from '../services/images/images.service';

@Module({
    imports: [TypeOrmModule.forFeature([Image])],
    controllers: [ImagesController],
    providers: [ImagesService],
})
export class ImageModule {}
