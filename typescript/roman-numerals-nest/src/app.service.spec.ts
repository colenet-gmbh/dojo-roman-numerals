import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  const appService = new AppService();

  describe('getArabicToRoman', () => {
    it('Given the arabic number 1 should return a body containing roman: I', () => {
      expect(appService.getArabicToRoman(1)).toStrictEqual('I');
    });

    it('Given the arabic number 2 should return a body containing roman: II', () => {
      expect(appService.getArabicToRoman(2)).toStrictEqual('II');
    });

    it('Given the arabic number 3 should return a body containing roman: III', () => {
      expect(appService.getArabicToRoman(3)).toStrictEqual('III');
    });
  });
});
