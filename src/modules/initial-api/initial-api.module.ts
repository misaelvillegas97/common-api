import { Module } from '@nestjs/common';
import { CommonController } from './common/common.controller';

@Module({
  controllers: [CommonController],
})
export class InitialApiModule {}
