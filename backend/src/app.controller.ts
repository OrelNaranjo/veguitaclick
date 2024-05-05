import { Controller, Post, UseGuards } from "@nestjs/common";
import { GetUsername } from "./decorators/app.decorator";
import { AuthGuard } from "./guards/auth/auth.guard";
import { Users } from "./entities/users.entity";

@UseGuards(AuthGuard)
@Controller('')
export class AppController {
    @Post()
    getStatus(@GetUsername() username: Users) {
        return {
            username: username,
            status: 'OK',
            statusCode: 200
        };
    }
}