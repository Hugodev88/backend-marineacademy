import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {

    constructor(
        private readonly planService: PlanService
    ) { }

    @Post()
    async createPlan(@Body() body: { name: string; price: number }) {
        const { name, price } = body; // Extrai os valores de body
        return await this.planService.createPlan(name, price);
    }

}
