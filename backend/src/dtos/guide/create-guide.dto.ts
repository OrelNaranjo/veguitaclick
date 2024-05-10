import { IsNotEmpty } from 'class-validator';

export class CreateGuideDto {
    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    sourceType: 'warehouse' | 'store';

    @IsNotEmpty()
    type: 'in' | 'out';

    @IsNotEmpty()
    warehouseId: number;

    @IsNotEmpty()
    storeId: number;

    @IsNotEmpty()
    createdById: number;

    @IsNotEmpty()
    assignedToId: number;

    @IsNotEmpty()
    notes: string;

    @IsNotEmpty()
    date: Date;

    guideDetails: { productId: number, quantity: number }[];
}