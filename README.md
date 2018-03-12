RESTful API

This application serves as a test application to show how to set up your own RESTful API. 
To unterstand this application follow the step-by-step-guide. To test your API you can use your browser or Postman (https://www.getpostman.com/apps). 

step-by-step-guide:
  steps                                                   look-up at
________________________________________________________________________________________________________________________________
1. create a basic server with express                     server.js:1
2. start your server with a port                          server.js:126
3. run a Mongo database                                   https://mlab.com/ for example hosts databases with 500MB for free
4. connect to your database with mongoose                 server.js:16
5. create a new Router with express                       server.js:31
6. prefix your Router with /api                           server.js:123
7. test the Router with a new route                       server.js:42 & use test the API with Postman (URL: localhost:8080/api)
8. create a new schema for your API-objects               mongo/user.js:1
9. import the schema and create all routes you want       server.js:47

There you go, you have now created your own API :)
