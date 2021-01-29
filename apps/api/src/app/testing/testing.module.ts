import { Module } from '@nestjs/common';
import { USE_CASES } from './usecases';
import { TestingController } from './testing.controller';
import { UserController } from './user.controller';

@Module({
  providers: [...USE_CASES],
  controllers: [TestingController, UserController],
})
export class TestingModule {}
