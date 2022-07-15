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
      expect(appController.getArabicToRoman(1)).toStrictEqual({"roman": "I"});
    });
  });
});


//  Given the arabic number 1
//     When I HTTP GET /arabic2roman/1
//     Then I get an HTTP Response with status 200
//     And a content-type of application/json
//     And a body containing the JSON object { "roman": "I" }