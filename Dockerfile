# alpine que é uma distribuição linux leve
FROM node:alpine

# dentro do container a aplicação ficará na pasta app
WORKDIR /app

# copiar tudo da maquina e coloca na pasta app
COPY . .

# instala as dependencias necessárias
RUN npm install

# informa qual porta será usada pelo container (apenas documenta)
EXPOSE 3000

# mantém o container rodando executando "qualquer coisa"
CMD tail -f /dev/null