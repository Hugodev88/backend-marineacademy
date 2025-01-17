// src/user/user.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() body: { name: string; email: string; dateOfBirth: Date; planId: number },) {
        return this.userService.createUser(body.name, body.email, body.dateOfBirth, body.planId);
    }

    @Get()
    async getUsers() {
        return this.userService.getAllUsers();
    }
}
