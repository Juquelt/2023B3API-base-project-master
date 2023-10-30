import {describe} from "node:test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

let projectId;

describe('POST /projects/', () => {
    it('should create a new project', (done) => {
        const projectData = {
            name: 'New Project Name',
            referringEmployeeId: 'your-employee-id',
        };

        chai
            .request(app)
            .post('/projects')
            .send(projectData)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id');
                projectId = res.body.id;
                done();
            });
    });
});

describe('GET /projects/', () => {
   it('should return a list of all projects', (done) => {
       chai
           .request(app)
           .get('/projects')
           .end((err, res) => {
               expect(res).to.have(200);
               expect(res.body).to.be.an('array');
               done();
           });
   });
});

describe('GET /projects/:id', () => {
    it('should return a specific project by ID', (done) => {
        chai
            .request(app)
            .get(`/projects/${projectId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id', projectId);
                done();
            });
    });
});