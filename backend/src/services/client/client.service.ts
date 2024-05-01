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
        private ClientRepository: Repository<Clients>,
    ) { }

    async create(createClientDto: CreateClientDto): Promise<Clients> {
        const Client = this.ClientRepository.create(createClientDto);
        return this.ClientRepository.save(Client);
    }

    async findAll(): Promise<Clients[]> {
        return this.ClientRepository.find();
    }

    async findOne(id: number): Promise<Clients> {
        return this.ClientRepository.findOneBy({ id: id });
    }

    async update(id: number, updateClientDto: UpdateClientDto): Promise<Clients> {
        const Client = await this.ClientRepository.findOneBy({ id: id });
        return this.ClientRepository.save({ ...Client, ...updateClientDto });
    }

    async remove(id: number): Promise<void> {
        const Client = await this.ClientRepository.findOneBy({ id: id });
        await this.ClientRepository.remove(Client);
    }
}
