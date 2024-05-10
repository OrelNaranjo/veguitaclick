import { Controller, Get, HttpCode, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { GetUsername } from "./decorators/app.decorator";
import { AuthGuard } from "./guards/auth/auth.guard";
import { User } from "./entities/user.entity";


@Controller('')
export class AppController {

    @Get()
    getRoot() {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    @UseGuards(AuthGuard)
    @Post()
    @HttpCode(200)
    getStatus(@GetUsername() username: User) {
        return {
            username: username,
            status: 'OK',
            statusCode: 200
        };
    }
}