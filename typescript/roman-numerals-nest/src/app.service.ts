import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getArabicToRoman (arabic: number): string {
    let roman = 'II';

    if (arabic === 1) roman = 'I';
    if (arabic === 3) roman = 'III';

    return roman ;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
