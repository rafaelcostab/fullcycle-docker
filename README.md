# Imersão Full Cycle
Full Cycle Bootcamp, docker for devs, building a stack from scratch

### Basic commands

Mostra os containers que estão sendo executados
```docker
docker ps 
```

Mostra os containers que já tivemos
```docker
docker ps -a
```

Rodando nginx, nginx é um servidor web.
```docker
docker run nginx
```

Roda a aplicação publicando a porta
```docker
docker run -p 8080:80 nginx
```

Fazendo request pra ver se o servidor web está rodando na porta
```sh
curl localhost:8080
```

Executar comandos dentro do container
```docker
docker exec -it ${containerid}
```

Entra dentro do container possibilitando rodar comandos
```docker
docker exec -it ${containerid} bash
```
Observação: um container não deve ser utilizado como máquina virtual, pois ele não armazena estado por padrão, ou seja, tudo que for feito será perdido no momento que remover o container e criá-lo de novo.

Adicionando o parâmetro -v criamos um volume, onde é criada uma pasta gerenciada pelo docker, onde tudo que eu gravar dentro dela não é perdido.   
o parâmetro seguinte `$(pwd)/html:/usr/share/nginx/html` aponta que uma pasta do seu computador deve ser "espelhada" na pasta do nginx. Assim as alterções realizadas no arquivo refletirá no arquivo do container.
```docker
docker run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
```

### Criando uma aplicação em NodeJS

Cria o `package.json` básico e funcional para rodar o exemplo. 
```sh
npm init -y
```

Agora vamos instalar o Express que é um framework minimalista para NodeJS
```sh
npm install express
```

### Rodando com dockerfile

Após criar o dockerfile com as instruções para gerar a imagem, basta buildar a imagem. O parâmetro `-t`server para nomear a imagem.
```sh
docker build -t nodeexemplo
```

rodar o comando para subir a aplicação.
```sh
docker run -p 3000:3000 nodeexemplo
```

Roda a aplicação criando montando um volume
```sh
docker run -p 3000:3000 -v $(pwd)/:/app nodeexemplo
```

Entra dentro de um container
```sh
docker exec -it ${containerid} sh  
```

Após entrar dentro do container podemos rodar a aplicação sem ter o node instalado na maquina, o mesmo está instalado no container
```sh
node index.js
```