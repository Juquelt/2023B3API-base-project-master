import { Controller, Post, Get, Param, UseGuards, Request, Body, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('users/auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('sign-up')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.signUp(createUserDto);
    }
}

export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body(ValidationPipe) loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    async getUserById(@Param('id') userId: string) {
        return this.usersService.getUserById(userId);
    }
    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getMyProfile(@Request() req) {
        const userId = req.user.id;
        return this.usersService.getUserById(userId);
    }
}


