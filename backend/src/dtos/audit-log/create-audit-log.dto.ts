import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAuditLogDto {
    @ApiProperty({ example: 'Nombre de tabla' })
    @IsNotEmpty()
    readonly tableName: string;

    @ApiProperty({ example: 'Operación' })
    @IsNotEmpty()
    readonly action: string;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    readonly recordId: number;

    @ApiProperty({ example: { field1: 'oldValue1', field2: 'oldValue2' } })
    @IsNotEmpty()
    readonly oldValue: any;

    @ApiProperty({ example: { field1: 'newValue1', field2: 'newValue2' } })
    @IsNotEmpty()
    readonly newValue: any;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    readonly userId: number;
}