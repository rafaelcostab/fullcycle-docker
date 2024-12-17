# Imersão Full Cycle
*[Docker for Developers: Construindo uma stack do zero](https://www.youtube.com/watch?v=SUyycXw4jTg&t=3044s)*

Exploraremos os principais conceitos e comandos para utilizar Docker no desenvolvimento de aplicações. Docker permite criar containers, que isolam ambientes e garantem a consistência entre desenvolvimento e produção.

Aqui, você aprenderá a rodar aplicações, configurar volumes e usar Docker Compose para gerenciar múltiplos serviços, além de criar uma aplicação Node.js utilizando um Dockerfile. O objetivo é oferecer uma base prática e clara para integrar Docker de forma eficiente

## Comandos Básicos do Docker

### Listar containers em execução
Mostra todos os containers que estão atualmente em execução:
```sh
docker ps
```
### Listar todos os containers
Mostra todos os containers, incluindo os que foram finalizados:

```sh
docker ps -a
```

### Rodando o Nginx
O Nginx é um servidor web. Para rodá-lo com o Docker, basta executar o comando:
```sh
docker run nginx
```

### Rodando o Nginx e publicando a porta
Para rodar o Nginx e expor a porta 80 do container na porta 8080 da máquina local:
```sh
docker run -p 8080:80 nginx
```

### Verificando se o servidor web está rodando
Use curl para verificar se o servidor está acessível na porta 8080:
```sh
curl localhost:8080
```

### Executando comandos dentro de um container
Você pode executar comandos dentro de um container em execução utilizando o seguinte comando:
```sh
docker exec -it ${container_id} <comando>
```

### Acessando o container via terminal
Se você quiser acessar o terminal interativo do container, use o comando abaixo para entrar com o shell bash (ou sh, dependendo da imagem):
```sh
docker exec -it ${container_id} bash
```
Observação: Containers não devem ser usados como máquinas virtuais. Por padrão, eles não armazenam estado. Ou seja, qualquer dado criado dentro de um container será perdido quando o container for removido e recriado.

### Criando um volume persistente
Adicionando o parâmetro -v, você pode criar um volume persistente que mantém os dados gravados dentro de uma pasta gerenciada pelo Docker. O exemplo abaixo cria um volume onde a pasta do seu computador ($(pwd)/html) é espelhada na pasta do Nginx (/usr/share/nginx/html), permitindo que as alterações feitas no arquivo na máquina local sejam refletidas no container.
```sh
docker run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
```

## Criando uma aplicação Node.js com Docker

### Iniciando um projeto Node.js
Crie o arquivo package.json básico para o seu projeto Node.js:
```sh
npm init -y
```

### Instalando o Express
Instale o Express, um framework minimalista para Node.js:
```sh
npm install express
```

## Rodando a aplicação com Dockerfile
### Criando um Dockerfile
Depois de criar o Dockerfile com as instruções para gerar a imagem, você pode construir a imagem Docker com o comando abaixo. O parâmetro `-t` serve para nomear a imagem.
```sh
docker build -t nodeexemplo .
```

### Rodando a aplicação com Docker
Para rodar a aplicação, use o seguinte comando, que mapeia a porta 3000 do container para a porta 3000 da máquina local:
```sh
docker run -p 3000:3000 nodeexemplo
```

### Rodando a aplicação com volume
Para rodar a aplicação e montar um volume que sincronize o código entre o container e sua máquina local, utilize o comando abaixo:
```sh
docker run -p 3000:3000 -v $(pwd)/:/app nodeexemplo
```

### Acessando o container e rodando a aplicação
Caso você queira acessar o container e rodar a aplicação diretamente no ambiente do container, use o comando abaixo para entrar no container:
```sh
docker exec -it ${container_id} sh
```
Após entrar no container, você pode rodar a aplicação sem ter o Node.js instalado na máquina local, pois o Node.js está instalado dentro do container:
```sh
node index.js
```

## Usando Docker Compose
### Subindo containers com Docker Compose
Cria e inicia os containers definidos no arquivo `docker-compose.yaml`:
```sh
docker compose up -d
```

### Acessando um container via Docker Compose
Entra no shell de um container gerenciado pelo Docker Compose, passando o nome do serviço. No exemplo, o nome do serviço é nodeapp:
```sh
docker compose exec -it nodeapp sh
```

## Considerações Finais

Ao longo desta documentação, abordamos desde os conceitos e comandos básicos do Docker até a criação de uma aplicação Node.js utilizando Docker e Docker Compose. O uso de containers facilita a criação de ambientes isolados e consistentes, o que simplifica tanto o desenvolvimento quanto o processo de implantação.

A prática com volumes, execução de comandos dentro de containers e o uso de Docker Compose para orquestrar múltiplos serviços são ferramentas poderosas que ajudam a aumentar a produtividade, garantir a portabilidade do software e reduzir erros em ambientes de produção.

Com esses conhecimentos, você está pronto para aplicar o Docker de maneira eficiente nos seus projetos, aproveitando seus benefícios para criar aplicações mais robustas e fáceis de manter.