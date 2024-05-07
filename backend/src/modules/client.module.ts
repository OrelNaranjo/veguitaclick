import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from '../controllers/clients/clients.controller';
import { Clients } from '../entities/clients.entity';
import { ClientService } from '../services/client/client.service';

@Module({
    imports: [TypeOrmModule.forFeature([Clients])],
    controllers: [ClientsController],
    providers: [ClientService],
})
export class ClientModule {}
