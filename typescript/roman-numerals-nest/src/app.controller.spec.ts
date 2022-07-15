import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('Given the arabic number 1 should return a body containing roman: I', () => {
        expect(appController.getArabicToRoman({arabic: 1})).toStrictEqual({ roman: 'I' });
    });

    it('Given the arabic number 2 should return a body containing roman: II', () => {
      expect(appController.getArabicToRoman({arabic: 2})).toStrictEqual({ roman: 'II' });
    });

    it('Given the arabic number 3 should return a body containing roman: III', () => {
      expect(appController.getArabicToRoman({arabic: 3})).toStrictEqual({ roman: 'III' });
    });
  });
});
