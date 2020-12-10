# nodeJS
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
API desnvolvina durante o _Criando APIs com Node_ do site de cursos [Balta](https://balta.io/).

## Navegar pelo README
* [Descrição](https://github.com/GustavoGomesDias/APIs-node#descri%C3%A7%C3%A3o)
* [Instalar](https://github.com/GustavoGomesDias/APIs-node#como-instalar-essa-api)
* [Tec. usadas](https://github.com/GustavoGomesDias/APIs-node#tecnologias-usadas)
* [ATENÇÃO](https://github.com/GustavoGomesDias/APIs-node#aten%C3%A7%C3%A2o)
## Descrição

É uma API básica que trabalha a criação de usuários (clientes e admins), produtos e pedidos. Nesse curso foi possível aprender como criar um server para essas funcionalidades, incluindo autenticação, cadastro de imagem, validações e muito mais.

## Como instalar essa API:

* Clone o repositório para sua máquina através do comando `$ git clone <url-do-repositorio>`;
* No terminal, rode `$ npm install` para instalar todas as tecnologias usadas.
![git-clone](https://github.com/GustavoGomesDias/APIs-node/blob/main/git-clone.png)
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

# ATENÇÂO
* Não consegui implementar a imagem, pois precisava de um manager e não deu para criar uma conta no Azure da Microsoft;
* Tirei a key do SendGrid (API de mandar email), por isso você terá que criar uma API no SendGrid e coloca-lá no sendgridKey em config.js, na pasta src.

Criado por [![Twitter Badge](https://img.shields.io/badge/GustavoG%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/Di3Gustavo) sobre a orientação do professsor [Balta](https://balta.io/).
