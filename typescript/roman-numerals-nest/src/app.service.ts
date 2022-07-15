import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  getArabicToRoman(arabic: number): string {
    let roman = '';

    if (arabic >= 10 && arabic < 15) roman = 'X'+this.getArabicToRoman(arabic-10);
    if (arabic === 9) roman = 'IX';
    if (arabic >= 5 && arabic < 9) roman = 'V'+this.getArabicToRoman(arabic-5);
    if (arabic === 4) roman = 'IV';
    if (arabic >= 1 && arabic < 4) roman = 'I'+this.getArabicToRoman(arabic-1);

    return roman;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
