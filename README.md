# AluraPlay

[Veja esta página em português](#créditos)

Create a playlist with your favorite YouTube videos.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Crie sua playlist de vídeos**
| :label: Tecnologias | html, css, javascript, json server
| :rocket: URL         | 
| :fire: Curso     | https://www.alura.com.br/curso-online-javascript-criando-requisicoes

![](https://user-images.githubusercontent.com/19349339/205926943-f418ad3d-4985-4fc5-a430-ea86a9ee3c82.png#vitrinedev)

## Credits

This project was developed in a JavaScript course from [Alura](https://www.alura.com.br), called "JavaScript: criando requisições" (JavaScript: making requests).

Instructor: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**

## Project Details
In this project, you can view a list of videos (a playlist), search for specific videos and also add new videos to the playlist. 

The focus in the project was to code JavaScript in order to dynamically add videos from a database, perform search by keyword, add new videos to the same database and also deal with errors that might happen in the connection with the API. 

JSON Server is used to mock a database and API requests and responses. You need to install it in order to successfully run the project. [Check the instalation details](#install-and-run-json-server).

## Stack
* HTML and CSS: files were already provided. I only updated them to translate texts to English and add custom error messages
* Javascript
    * fetch API (GET and POST requests);
    * DOM manipulation: `querySelector()`, `createElement()`, `appendChild()`;
    * error handling with try-catch;
* NodeJS (version v16.15.1): used to run a JavaScript application and also to install the JSON Server package;
* JSON Server (version 0.17.1): used to mock a REST API. It accesses `db.json` file as a database, in order to handle GET and POST requests.

# Install and run JSON Server
Type the following command to run a script that will initialize npm and create a `package.json` file, which will contain the necessary information to install this application. The word "npm" stands for "Node Package Manager", and it will enable to use NodeJS.

    npm init

Next, run the following command to install JSON Server *locally* for this application (and all the other necessary packages). It will also update the `package.json` file, adding JSON Server as a dependency.

    npm install json-server

In order to run JSON Server and handle requests, type the following command:

    npx json-server --watch db.json

Note: if you install JSON Server globally (`npm install -g JSON Server`), you don't need to type `npx` to run it. [View more about JSON Server command troubleshooting](https://bobbyhadz.com/blog/npm-command-not-found-json-server).

After following these steps, you'll be able to open the project and view/add videos to the playlist.  I recommend using VS Code with ["Live Server" extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed and running, in order to avoid CORS policy errors.

# Screenshots

## GIF of home page and page to add videos
![gif showing the home page and the page to add videos](https://user-images.githubusercontent.com/19349339/208684731-184c49de-ecd8-411e-8098-5e787e08f748.gif)

## Home Page after searching for the word "casemiro" (only one video found)
![screenshot of the home page with results from a search](https://user-images.githubusercontent.com/19349339/205937321-39ef50e7-2be3-4958-a1b1-fc4587b64588.png)

---

## Créditos

Este projeto foi desenvolvido em um curso de JavaScript da [Alura](https://www.alura.com.br), chamado "JavaScript: criando requisições".

Instrutora: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**

## Detalhes do projeto

Neste projeto, vocè pode visualizar uma lista de vídeos (uma playlist), procurar por um vídeo em específico, e também adicionar novos vídeos à playlist.

O foco do projeto é desenvolver o código em JavaScript para mostrar dinamicamente os vídeos na tela (obtidos de um banco de dados), além de fazer a busca por palavra-chave, adicionar novos vídeos (e salvá-los no banco) e tratar erros que possam acontecer na conexão com a API que "conversa" com o banco de dados.

É utilizado o JSON Server para mockar um banco de dados e lidar com requisições e respostas. É necessário instalá-lo para rodar este projeto com todas as funcionalidades. [Veja as instruções para instalação](#instale-e-rode-o-json-server).

## Stack utilizada

* HTML e CSS: os arquivos foram fornecidos prontos. Eu somente os atualizei traduzindo os textos para o Inglês e adicionando mensagens de erro customizadas;

* Javascript
    * fetch API (para tratar as requisições GET e POST);
    * manipulação do DOM com: `querySelector()`, `createElement()`, `appendChild()`;
    * tratamento de erros com try-catch;

* NodeJS (versão v16.15.1): utilizado para rodar o aplicativo JavaScript e também instalar o pacote do JSON Server;

* JSON Server (versão 0.17.1): usado para mockar a API REST. Ele acessa o arquivo `db.json` e o trata como sendo o banco de dados, para lidar com as requisições GET e POST.

# Instale e rode o JSON Server

Digite o comando abaixo para rodar o script que irá iniciar o npm e criar o arquivo `package.json`. Este arquivo contém as informações necessárias para instalar este aplicativo. A palavra "npm" significa "Node Package Manager" e possibilita o uso do NodeJS.

    npm init

Após, rode o comando a seguir para instalar o JSON Server *localmente* para este app (também irá instalar todos os outros pacotes necessários). O comando também irá atualizar o arquivo `package.json`, adicionando o JSON Server como dependência.

    npm install json-server

Para rodar o JSON Server e lidar com as requisições, digite o seguinte commando:

    npx json-server --watch db.json

Observação: se você instalar o JSON Server globalmente (`npm install -g JSON Server`), você não precisa digitar `npx` para rodá-lo. [Veja mais soluções de problemas para o comando do JSON Server (em inglês)](https://bobbyhadz.com/blog/npm-command-not-found-json-server).

Após seguir estes passos, você conseguirá iniciar o projeto e ver/adicionar vídeos à playlist. Eu recomendo usar o VS Code com a [extensão "Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instalada e rodando, para evitar erros de "CORS policy".

# Screenshots

## GIF da página inicial e da página de adicionar vídeos
![gif mostrando a página inicial e a página de adicionar vídeos](https://user-images.githubusercontent.com/19349339/208684731-184c49de-ecd8-411e-8098-5e787e08f748.gif)

## Página inicial após procurar pela palavra "casemiro" (somente um vídeo encontrado)
![screenshot da página inicial com resultados da busca](https://user-images.githubusercontent.com/19349339/205937321-39ef50e7-2be3-4958-a1b1-fc4587b64588.png)
