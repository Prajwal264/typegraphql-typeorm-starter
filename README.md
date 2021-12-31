
# TypegraphQL + TypeORM Starter

Starter template for bootstrapping a TypeGraphQL + Apollo Server GraphQL API + TypeORM. The purpose is to help getting started quickly with TypeGraphQL + TypeORM development by providing a runnable API with examples you can build on.




## Installation

Install `typegraphql-typeorm-starter` with npm

    1. npm i typegraphql-typeorm-starter
    2. cd typegraphql-typeorm-starter
    3. npm install // in project root directory
    4. npm run watch // to start typescript watcher
    5. npm start // to start the server

## Note
   This stater uses typeORM to setup the configuration + connect to the database.

   ### Connecting to a database
   1. create a file called `ormconfig.json`.
   2. Dump this 
   ```js 
   {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "admin",
      "password": "",
      "database": "databasename",
      "synchronize": true,
      "logging": false,
      "entities": [
        "dist/entities/**/*.js"
      ],
      "migrations": [
        "dist/migrations/**/*.js"
      ],
      "subscribers": [
        "dist/subscriber/**/*.js"
      ]
    } 
  ```
    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 About Me
I'm Prajwal, a self taught Front end developer and an aspiring Full stack developer. I've worked on many projects on web.

Software engineering has been my muse since childhood. Even though I've taken the path less trodden, it hasn't stopped me from moving ahead, towards the fulfillment of my goals.

Checkout my portfolio here: https://portfolio-prajwal-p.vercel.app/


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-prajwal-p.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prajwalp264/)
