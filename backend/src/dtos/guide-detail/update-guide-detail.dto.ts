import { PartialType } from '@nestjs/swagger';
import { CreateGuideDetailDto } from './create-guide-detail.dto';

export class UpdateGuideDetailDto extends PartialType(CreateGuideDetailDto) {}
