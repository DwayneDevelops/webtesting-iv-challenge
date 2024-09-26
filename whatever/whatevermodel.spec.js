const db = require('../data/dbConfig.js');

const { insert } = require('./whatevermodel.js');

describe('whatever model', () => {
    beforeEach(async () => {
        await db('whatever').truncate();
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('insert()', () => {
        it('should insert whatevers', async () => {
            await insert({ random: 'Moose' });
            await insert({ random: 'car'});

            const whatevers = await db('whatever');

            expect(whatevers).toHaveLength(2)
        })

        it('should insert the provided whatever', async () => {
            let whatever = { random: 'Camel' }
            let inserted = await insert(whatever);
            expect(inserted.random).toBe(whatever.random);
            
            whatever = { random: 'Buick' }
            inserted = await insert(whatever);
            expect(inserted.random).toBe(whatever.random);
        });
    });
});
