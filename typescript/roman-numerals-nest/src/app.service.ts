import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  getArabicToRoman(arabic: number): string {
    let roman = '';

    if (arabic > 0 && arabic < 4) roman = 'I'+this.getArabicToRoman(arabic-1);
    if (arabic === 4) roman = 'IV';
    if (arabic === 5) roman = 'V';
    if (arabic === 6) roman = 'VI';
    if (arabic === 7) roman = 'VII';

    return roman;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
