import express from "express";
import usersRouter from "./routes/users.js"
import 'dotenv/config';
import mysql from 'mysql2';

// const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

const app = express();

app.use(express.json());
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
