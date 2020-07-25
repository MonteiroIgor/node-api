const chai = require('chai');
const chaiHttp = require('chai-http');
const CADASTRO_USUARIO = require('../utils/cadastro.json').CADASTRO_USUARIO;
const urlBase = 'http://localhost:3001';


chai.use(chaiHttp);
chai.should();

describe('Product - Endpoints', () => {
    describe('POST /api/products', () => {
        it ('deve retornar usuário criado - 200', done => {
          chai.request('http://localhost:3001')
            .post('/api/products')
            .send(CADASTRO_USUARIO)
            .end((err, res) => {
                chai.assert.isNull(err  );
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                res.body.should.have.property('error').equal(0);
                res.body.payload.comments.should.have.property('_id');
                res.body.payload.comments.should.have.property('title').equal(CADASTRO_USUARIO.title);
                done();
            });  
             done();  
        });
    });
});