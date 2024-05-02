import { Controller, Post, Body, ValidationPipe, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LoginDto } from 'src/dtos/login/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales no válidas');
    }
    return this.authService.login(user);
  }
}