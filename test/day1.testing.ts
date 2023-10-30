import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication} from "@nestjs/common";
import { AppModule} from "../src/app.module";
import {describe} from "node:test";

describe('Day 1 Tests', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
    });

    it('/users/auth/sign-up (POST)', () => {
        return request(app.getHttpServer())
            .post('users/auth/sign-up')
            .send({})
            .expect(201);
    });

    it('/users/auth/login (POST)', () => {
        return request(app.getHttpServer())
            .post('/users/auth/login')
            .send()
            .expect(200);
    });

    it('/users/me GET', () => {
        return request(app.getHttpServer())
            .get('/users/me')
            .expect(200);
    });

    afterAll(async () => {
        await app.close();
    });
});