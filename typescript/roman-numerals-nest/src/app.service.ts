import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    arabicToRoman(arabic: number): string {
        let roman = '';

        const numberalMappings = [
            [40, 'XL'],
        ]

        for (const mapping in numberalMappings) {
            if (arabic >= (mapping[0] as number)) roman = mapping[1] + this.arabicToRoman(arabic-mapping[0] as number);
        }

        if (arabic >= 40 ) roman = 'XL'+this.arabicToRoman(arabic-40);
        else if (arabic >= 10 ) roman = 'X'+this.arabicToRoman(arabic-10);
        else if (arabic >= 9) roman = 'IX'+this.arabicToRoman(arabic-9);
        else if (arabic >= 5 ) roman = 'V'+this.arabicToRoman(arabic-5);
        else if (arabic >= 4) roman = 'IV'+this.arabicToRoman(arabic-4);
        else if (arabic >= 1) roman = 'I'+this.arabicToRoman(arabic-1);

        return roman;
    }
    getHello(): string {
        return 'Hello World!';
    }
}
