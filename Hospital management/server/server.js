const express = require ('express'); //importing express library
const cors = require('cors'); 
const app = express(); 
//creating instance of express application.
//This app object will be used to configure routes, middleware and handle HTTP request and response.
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello from the Express.js backend!');
  });
//when user will access to root url of your application, this  route will get activated.
app.get('/api/patients', (request, response) =>
{
    const patients= [
        {id: '1', name : 'jenna', age:'30'} ,
        {id: '2', name : 'elena', age : '28'}
    ] ;
response.json(patients);
});
//this line will tell express to start listening for incoming HTTP request on this specified port.
app.listen(5000, () =>
{
   console.log("server is running on port: 5000");
}
);