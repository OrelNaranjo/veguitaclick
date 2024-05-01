import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesController } from 'src/controllers/images/images.controller';
import { Images } from 'src/entities/images.entity';
import { ImageService } from 'src/services/image/image.service';

@Module({
    imports: [TypeOrmModule.forFeature([Images])],
    controllers: [ImagesController],
    providers: [ImageService],
})
export class ImageModule {}
