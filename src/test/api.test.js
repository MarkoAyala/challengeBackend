const request = require('supertest');
const {expect} = require('chai');
const app = require('../../index');

// Testing ruta GET 

describe('GET /iecho', ()=>{
    it('Deberia devolver status 200', done =>{
        request(app)
        .get('/iecho?text=hola')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err)=>{
            if(err) return done(err);
            done()
        })
    });
    it('Deberia responder con un json que contiene el texto manipulado', done =>{
        request(app)
        .get('/iecho?text=challenge')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err,res)=>{
            expect(res.body)
            done()
        })

    });
    it('Deberia responder con json de error si no se le pasa una query', done =>{
        request(app)
        .get('/iecho')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .expect({error:'no text'})
        .end((err)=>{
            if(err) return done(err);
            done()
        })
    })
})

