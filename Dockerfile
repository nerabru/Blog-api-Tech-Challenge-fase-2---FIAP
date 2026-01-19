# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o resto do projeto
COPY . .

# Porta usada pela API
EXPOSE 3000

# Comando para iniciar a API
CMD ["node", "server.js"]
