This project was the backend APIs for facerecognition project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

For it running locally, need to change the database connection to the following:<br />
```
   connection: {
    host: '127.0.0.1',
    user: 'meiling',
    password: '',
    database: 'face-rec'
   }
 });
```

Also it is good to change node to nodemon in package.json file.<br />
```
 "scripts": {
    "start": "nodemon server.js"
  },
```