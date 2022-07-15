import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  arabicToRoman(arabic: number): string {
    let roman = '';

    if (arabic >= 10 ) roman = 'X'+this.arabicToRoman(arabic-10);
    else if (arabic === 9) roman = 'IX';
    else if (arabic >= 5 ) roman = 'V'+this.arabicToRoman(arabic-5);
    else if (arabic === 4) roman = 'IV';
    else if (arabic >= 1) roman = 'I'+this.arabicToRoman(arabic-1);

    return roman;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
