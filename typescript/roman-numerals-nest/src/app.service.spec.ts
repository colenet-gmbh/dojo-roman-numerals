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
    ])(
      'Given the arabic number $arabic should return a body containing roman: $roman',
      ({ arabic, roman }) => {
        expect(appService.getArabicToRoman(arabic)).toStrictEqual(roman);
      },
    );
  });
});
