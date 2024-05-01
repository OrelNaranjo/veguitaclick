import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from 'src/controllers/clients/clients.controller';
import { Clients } from 'src/entities/clients.entity';
import { ClientService } from 'src/services/client/client.service';

@Module({
    imports: [TypeOrmModule.forFeature([Clients])],
    controllers: [ClientsController],
    providers: [ClientService],
})
export class ClientModule {}
