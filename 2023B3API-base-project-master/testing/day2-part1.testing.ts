import {describe} from "node:test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const except = chai.except;

describe('GET /users', () => {
    it('should return a list of all users', (done) => {
        chai
            .request(app)
            .get('/users')
            .end((err, res) => {
                except(res).to.have.status(200);
                except(res.body).to.be.an('array');
                done();
            });
    });
});

describe('GET /users/:id', () => {
    it('should return a specific user by ID', (done) => {
        const userId = 'your-user-id';

        chai
            .request(app)
            .get(`/users/${userId}`)
            .end((err, res) => {
                except(res).to.have.status(200);
                except(res.body).to.be.an('object');
                except(res.body).to.have.property('id', userId);
                done();
            });
    });
});
