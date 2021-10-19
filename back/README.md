# Backend
Express Api server

## Dependencies

```
"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "crypto-js": "^4.1.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.8",
    "mongoose-unique-validator": "^3.0.0",
    "multer": "^1.4.3",
    "password-validator": "^5.1.1"
  }
```

## .env
Create to root **back** folder an .env file with the following lines in it :

```
DB_NAME=<mongodb-db-name>
DB_USER=<mongodb-user>
DB_PWD=<mongodb-password>
DB_HOST=<mongodb-9utsh.mongodb.net>
ASK_TOKEN=Gvj76GV6kjh_yvzddzsdcC4673X2_vu76mp234g43v
```

## Run

Install all Dependencies
```
npm install
```
and start the server
```
nodemon server
```

