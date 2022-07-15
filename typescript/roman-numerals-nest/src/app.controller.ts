import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/arabic2roman/:arabic')
  getArabicToRoman(@Param() params): { roman: string } {
    const arabic = Number(params.arabic);
    return { roman: this.appService.getArabicToRoman(arabic) };
  }
}
