import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
    @ApiProperty({ example: 'http://example.com/image.jpg' })
    readonly url: string;

    @ApiProperty({ example: 'Alt text' })
    readonly alt: string;

    @ApiProperty({ example: 1 })
    readonly productId: number;

    @ApiProperty({ example: 1 })
    readonly categoryId: number;
}