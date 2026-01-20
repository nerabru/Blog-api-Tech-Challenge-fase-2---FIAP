const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

// 🔹 Detecta ambiente
const isTest = process.env.NODE_ENV === 'test';

// 🔹 Conexão com Mongo (somente fora de teste)
if (!isTest) {
  mongoose.connect('mongodb://127.0.0.1:27017/blogdb')
    .then(() => console.log('MongoDB conectado 🟢'))
    .catch(err => console.error(err));
}

// 🔹 Model
const PostSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  autor: String,
  curso: String,
  criadoEm: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

// ===== ROTAS =====

app.get('/', (req, res) => {
  res.send('API do Blog está ok, podemos seguir!');
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar posts' });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post não encontrado' });
    res.json(post);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
});

app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

app.put('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

app.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ mensagem: 'Post deletado com sucesso' });
});

// 🔹 Sobe o servidor se não for teste
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
  });
}

// 🔹 Exporta APENAS o app
module.exports = app;
