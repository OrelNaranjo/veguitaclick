import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
    @ApiProperty({ example: 'Category name' })
    readonly name: string;

    @ApiProperty({ example: 'Category description' })
    readonly description: string;

    @ApiProperty({ example: true })
    readonly is_active: boolean;

    @ApiProperty({ example: 1, required: false })
    readonly parentId: number;
}