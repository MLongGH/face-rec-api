This project was the backend APIs for facerecognition project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

For it running locally, need to change the database connection in the server.js file to the following:<br />
```
const db = knex({
    client: 'pg',
    connection: {
    host: '127.0.0.1',
    user: user_name,
    password: your_password,
    database: your_database
    }
});
```

Also it is good to change node to nodemon in package.json file.<br />
```
 "scripts": {
    "start": "nodemon server.js"
  },
```

### USE DOCKER
"docker-compose down -v" to turn down the docker and all the connections
"docker-compose up --build" to run and build docker
"docker-compose up" to run docker
"docker-compose exec redis redis-cli" to run redis cli in docker