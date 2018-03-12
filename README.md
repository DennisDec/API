<div>
  <h2>RESTful API</h2>
  <p>This application serves as a test application to show how to set up your own RESTful API.</p>
  <p>To unterstand this application follow the step-by-step-guide. To test your API you can use your browser or Postman (https://www.getpostman.com/apps).</p>
  <p>step-by-step-guide:</p>
  <table>
    <tr>
      <th></th>
      <th>steps</th>
      <th>look-up at</th>
    </tr>
    <tr>
      <td>1.</td>
      <td>create a basic server with express</td>
      <td>server.js:1</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>start your server with a port</td>
      <td>server.js:126</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>run a Mongo database</td>
      <td>https://mlab.com/ for example hosts databases with 500MB for free</td>
    </tr>
    <tr>
      <td>4.</td>
      <td>connect to your database with mongoose</td>
      <td>server.js:16</td>
    </tr>
    <tr>
      <td>5.</td>
      <td>create a new Router with express</td>
      <td>server.js:31</td>
    </tr>
    <tr>
      <td>6.</td>
      <td>prefix your Router with /api</td>
      <td>server.js:123</td>
    </tr>
    <tr>
      <td>7.</td>
      <td>test the Router with a new route</td>
      <td>server.js:42 & use test the API with Postman (URL: localhost:8080/api)</td>
    </tr>
    <tr>
      <td>8.</td>
      <td>create a new schema for your API-objects</td>
      <td>mongo/user.js:1</td>
    </tr>
    <tr>
      <td>9.</td>
      <td>import the schema and create all routes you want</td>
      <td>server.js:47</td>
    </tr>
  </table>
  <p>There you go, you have now created your own API :)</p>
</div>
