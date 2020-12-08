# nodeJS
API desnvolvina durante o _Criando APIs com Node_ do site de cursos [Balta](https://balta.io/).

## Navegar pelo README
* [Descrição](https://github.com/GustavoGomesDias/APIs-node#descri%C3%A7%C3%A3o)
* [Instalar](https://github.com/GustavoGomesDias/APIs-node#como-instalar-essa-api)
* [Tec. usadas](https://github.com/GustavoGomesDias/APIs-node#tecnologias-usadas)
## Descrição

É uma API básica que trabalha a criação de usuários (clientes e admins), produtos e pedidos. Nesse curso foi possível aprender como criar um server para essas funcionalidades, incluindo autenticação, cadastro de imagem, validações e muito mais.

## Como instalar essa API:

* Clone o repositório para sua máquina através do comando `$ git clone <url-do-repositorio>`;
* No terminal, rode `$ npm install` para instalar todas as tecnologias usadas.

## Tecnologias usadas

* Body-parser - Converte o retorno do body para json;
* Debug;
* Express - MVC, models, controllers;
* Guid - Gera um número aleatório (usado para identificar um pedido);
* Http - Ouvir responde e request;
* JWT (jsonwebtoken) - Token usado;
* MD5 - Encriptagem;
* Mongoose - Módulo usado para se conectar ao MongoDB;
* Sendgrid - Enviar email(para sendgrid, sua versão deve estar na 2.0.0, pois esta API muda muito ao londo do tempo).
