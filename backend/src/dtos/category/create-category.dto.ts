import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty({ example: 'Nombre de la categoria' })
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({ example: 'Descripción de la categoria' })
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty({ example: true })
    @IsNotEmpty()
    readonly is_active: boolean;

    @ApiProperty({ example: 1, required: false })
    @IsNotEmpty()
    readonly parentId: number;
}