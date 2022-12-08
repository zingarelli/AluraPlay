# AluraPlay

Create a playlist with your favorite YouTube videos.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **AluraPlay**
| :label: Tecnologias | html, css, javascript, json server
| :rocket: URL         | 
| :fire: Curso     | https://www.alura.com.br/curso-online-javascript-criando-requisicoes

![](https://user-images.githubusercontent.com/19349339/205926943-f418ad3d-4985-4fc5-a430-ea86a9ee3c82.png#vitrinedev)

## Project Details
In this project, you can view a list of videos (a playlist), search for specific videos and also add new videos to the playlist. 

The focus in the project was to code JavaScript in order to dynamically add videos from a database, perform search by keyword, add new videos to the same database and also deal with errors that might happen in the connection with the API. 

JSON Server is used to mock a database and API requests and responses. You need to install it in order to successfully run the project. [Check the instalation details](#install-and-run-json-server).

## Credits

This project was developed in a JavaScript course from [Alura](https://www.alura.com.br), called "JavaScript: criando requisições" (JavaScript: making requests).

Instructor: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**

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

## Home Page after searching for the word "casemiro" (only one video found)
![screenshot of the home page with results from a search](https://user-images.githubusercontent.com/19349339/205937321-39ef50e7-2be3-4958-a1b1-fc4587b64588.png)

## Page to add a new video
![screenshot of the page to add a new video to the playlist](https://user-images.githubusercontent.com/19349339/205938039-96bb1413-2318-4196-a412-35a54a16309f.png)
