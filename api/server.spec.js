const supertest = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET/', () => {
        it('responds with 200', async () => {
            await supertest(server)
            .get('/')
            .expect(200);
        });
        
        it('responds with 200', async () => {
            await supertest(server)
            .get('/')
            .expect('Content-Type', /json/i);
        });
        
        it('responds { api: "Here I go!"}', async () => {
            await supertest(server)
            .get('/')
            .expect(res.body).toEqual({ api: 'Here I go!'});
        });
    });
});