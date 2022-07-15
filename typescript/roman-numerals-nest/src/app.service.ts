import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getArabicToRoman(arabic: number): string {
    let roman = '';

    if (arabic === 1) roman = 'I';
    if (arabic === 2) roman = 'II';
    if (arabic === 3) roman = 'III';
    if (arabic === 4) roman = 'IV';
    if (arabic === 5) roman = 'V';
    if (arabic === 6) roman = 'VI';

    return roman;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
