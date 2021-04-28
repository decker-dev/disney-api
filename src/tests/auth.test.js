import request from "supertest"
import app from "../index"
describe("/POST  /auth/login",()=>{
    it('responde un json cuando inicia sesión',done =>{
        request(app)
            .get('/auth/login')
            .set('Accept','application/json')
            .expect('Content-Type','application/json; charset=utf-8')
            .expect(200,done)
    })
})

