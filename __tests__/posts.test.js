process.env.NODE_ENV = 'test';

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('API Blog - Posts', () => {

  let postId;

  test('Deve criar um novo post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        titulo: 'Post Teste',
        conteudo: 'Conteúdo de teste',
        autor: 'Bruno',
        curso: 'FIAP'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    postId = res.body._id;
  });

  test('Deve listar todos os posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('Deve buscar post por ID', async () => {
    const res = await request(app).get(`/posts/${postId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(postId);
  });

  test('Deve atualizar um post', async () => {
    const res = await request(app)
      .put(`/posts/${postId}`)
      .send({ titulo: 'Post Atualizado' });

    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe('Post Atualizado');
  });

  test('Deve deletar um post', async () => {
    const res = await request(app).delete(`/posts/${postId}`);
    expect(res.statusCode).toBe(200);
  });

});
