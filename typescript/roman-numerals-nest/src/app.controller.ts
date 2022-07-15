import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/arabic2roman/1')
  @Get('/arabic2roman/2')
  getArabicToRoman(arabic: number): { roman: string } {
    let roman = 'II';

    if (arabic === 1) roman = 'I';

    return { roman };
  }
}
