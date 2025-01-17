import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanService {

    constructor(private prisma: PrismaService) { }

    async createPlan(name: string, price: number) {

        return this.prisma.plan.create({ data: { name, price } });

    }
}
