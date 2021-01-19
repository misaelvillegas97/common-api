import { Controller, Get } from '@nestjs/common';

@Controller('common')
export class CommonController {
  @Get()
  common(): string {
    return 'common service working';
  }
}
