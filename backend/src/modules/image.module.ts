import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesController } from '../controllers/images/images.controller';
import { Images } from '../entities/images.entity';
import { ImageService } from '../services/image/image.service';

@Module({
    imports: [TypeOrmModule.forFeature([Images])],
    controllers: [ImagesController],
    providers: [ImageService],
})
export class ImageModule {}
