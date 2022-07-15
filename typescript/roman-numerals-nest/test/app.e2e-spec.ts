import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/arabic2roman/1 (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/arabic2roman/1')
      .expect(200)
      .expect('{"roman":"I"}')
      .expect((res) => res.get('content-type') === 'application/json');
    expect(response.header['content-type']).toContain('application/json');
  });
});
