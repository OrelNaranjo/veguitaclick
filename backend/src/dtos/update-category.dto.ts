import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDto {
    @ApiPropertyOptional({ example: 'Category name', required: false })
    readonly name?: string;

    @ApiPropertyOptional({ example: 'Category description', required: false })
    readonly description?: string;

    @ApiPropertyOptional({ example: true, required: false })
    readonly is_active?: boolean;

    @ApiPropertyOptional({ example: 1, required: false })
    readonly parentId?: number;
}