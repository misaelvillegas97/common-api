import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitialApiModule } from './modules/initial-api/initial-api.module';

@Module({
  imports: [InitialApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
