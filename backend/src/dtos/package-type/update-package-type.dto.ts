import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePackageTypeDto {
    @ApiPropertyOptional({ example: 'Package type name' })
    readonly name?: string;
}