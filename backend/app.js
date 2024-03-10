//Import express module
var express = require('express');
//import mysql package and create connection pool
var mysql2 = require('mysql2');
//set up the port listen to
//import cors
var app = express();
var cors = require("cors");
app.use(cors());

const port = 4000;
//create express app

//configure database
let dbConfig = {
  connectionLimit: 10,
  database: 'demoapp',
  user: 'demoapp',
  host: 'localhost',
  password: '12345678'
};

//create a the connection to the database
var connection = mysql2.createConnection(dbConfig);

//connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

//use express.json() middleware to parse the request body
app.use(express.json());
//create a simple get request handler to send a response back
app.get('/', function (req, res) {
  res.send("GET Request received");
})

//post request handler to add a new employee to the database
app.post("/add-employee", (req, res) => {
  // console.log(req.body)
  // console.log(req.url)
  //write the sql query to insert date to the database table named employee_test
  const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;

  //execute the query with callback function
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted')
  })

  //Send created employee data as the response
  const response = {
    status: "Success",
    message: "Employee added successfully"
  }

  res.status(201).json(response)
})

//post request handler to login  an existing user
app.post('/login', (req, res) => {
  let email = req.body.email;
  // console.log(email)
  let password = req.body.password;
  // console.log(password)
  console.log(req.body)

  let sql = `SELECT * FROM employee_test WHERE email='${email}' AND password='${password}';`;

  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results)

    //check if the result is empty or not
    if (results.length > 0) {
      //send response back to the client
      res.status(200).json({
        status: 'success',
        message: 'User logged in'
      });
    } else {
      res.status(401).json({
        status: 'failure',
        message: 'Invalid credentials'
      });
    }
  })
});

//make the port to listen
app.listen(port, function () {
  console.log(`Server is listening on Port: ${port}`);
});