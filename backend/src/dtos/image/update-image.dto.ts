import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateImageDto {
    @ApiPropertyOptional({ example: 'http://example.com/image.jpg', required: false })
    readonly url?: string;

    @ApiPropertyOptional({ example: 'Alt text', required: false })
    readonly alt?: string;

    @ApiPropertyOptional({ example: 1, required: false })
    readonly productId?: number;

    @ApiPropertyOptional({ example: 1, required: false })
    readonly categoryId?: number;
}