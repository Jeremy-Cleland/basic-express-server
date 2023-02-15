'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('validator', () => {
  test('should verify a valid name is present', async () => {
    const response = await request.get('/person').query({ name: 'Jeremy' });
    expect(response.status).toBe(200);
  });
});
