import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [UserModule, PlanModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
