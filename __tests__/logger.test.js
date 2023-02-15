const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('logger', () => {
  test('properly logs ouput', async () => {
    const response = await request.get('/');
    expect(response.text).toBeTruthy();
  });
});
