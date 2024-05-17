import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProcessDto } from '../../dtos/process/create-process.dto';
import { UpdateProcessDto } from '../../dtos/process/update-process.dto';
import { Process } from '../../entities/process.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessesService {
    constructor(
        @InjectRepository(Process)
        private processRepository: Repository<Process>,
    ) { }

    async create(createProcessDto: CreateProcessDto): Promise<Process> {
        const process = this.processRepository.create(createProcessDto);
        return this.processRepository.save(process);
    }

    async findAll(): Promise<Process[]> {
        return this.processRepository.find();
    }

    async findOne(id: number): Promise<Process> {
        return this.processRepository.findOneBy({ id: id });
    }

    async update(id: number, updateProcessDto: UpdateProcessDto): Promise<Process> {
        const process = await this.processRepository.findOneBy({ id: id });
        return this.processRepository.save({ ...process, ...updateProcessDto });
    }

    async remove(id: number): Promise<void> {
        const process = await this.processRepository.findOneBy({ id: id });
        await this.processRepository.remove(process);
    }
}
