// src/user/user.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async createUser(name: string, email: string, dateOfBirth: Date, planId: number) {

        if (!name) {
            throw new BadRequestException('must have name')
        }

        return this.prisma.user.create({
            data: {
                name,
                email,
                dateOfBirth,
                plan: {
                    connect: { id: planId },
                },
            },
        });
    }

    async getAllUsers() {
        return this.prisma.user.findMany();
    }
}
