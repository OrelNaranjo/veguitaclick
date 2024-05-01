import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageTypeDto {
    @ApiProperty({ example: 'Package type name' })
    readonly name: string;
}