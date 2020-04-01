const request = require('supertest');
const app  = require('../../src/app');
const connection = require ('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'asd') //para quando precisar passar um header
            .send({
                "name": "PAIS",
                "email": "contato@ong.com",
                "whatsapp": "44999999999",
                "city": "Campo Mourão",
                "uf": "PR"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});