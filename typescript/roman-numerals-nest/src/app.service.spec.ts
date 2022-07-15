import { AppService } from './app.service';

describe('AppService', () => {
  const appService = new AppService();

  describe('getArabicToRoman', () => {
    it.concurrent.each([
      { arabic: 1, roman: 'I' },
      { arabic: 2, roman: 'II' },
      { arabic: 3, roman: 'III' },
      { arabic: 4, roman: 'IV' },
      { arabic: 5, roman: 'V' },
      { arabic: 6, roman: 'VI' },
      { arabic: 7, roman: 'VII' },
      { arabic: 8, roman: 'VIII' },
      { arabic: 9, roman: 'IX' },
      { arabic: 10, roman: 'X' },
      { arabic: 11, roman: 'XI' },
      { arabic: 14, roman: 'XIV' },
    ])(
      'Given the arabic number $arabic should return a body containing roman: $roman',
      ({ arabic, roman }) => {
        expect(appService.getArabicToRoman(arabic)).toStrictEqual(roman);
      },
    );
  });
});
