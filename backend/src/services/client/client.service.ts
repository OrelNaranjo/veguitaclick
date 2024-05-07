import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from '../../dtos/client/create-client.dto';
import { UpdateClientDto } from '../../dtos/client/update-client.dto';
import { Clients } from '../../entities/clients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Clients)
        private clientRepository: Repository<Clients>,
    ) { }

    async create(createClientDto: CreateClientDto): Promise<Clients> {
        const client = this.clientRepository.create(createClientDto);
        return this.clientRepository.save(client);
    }

    async findAll(): Promise<Clients[]> {
        return this.clientRepository.find();
    }

    async findOne(id: number): Promise<Clients> {
        return this.clientRepository.findOneBy({ id: id });
    }

    async update(id: number, updateClientDto: UpdateClientDto): Promise<Clients> {
        const client = await this.clientRepository.findOneBy({ id: id });
        return this.clientRepository.save({ ...client, ...updateClientDto });
    }

    async remove(id: number): Promise<void> {
        const client = await this.clientRepository.findOneBy({ id: id });
        await this.clientRepository.remove(client);
    }
}
