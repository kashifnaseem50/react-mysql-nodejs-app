const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get('/', (req, res) => {
    res.send({data:"hello"})
  });


  // app.get('/get', (req, res) => {
  //   const SelectQuery = " SELECT * FROM books_reviews";
  //   db.query(SelectQuery, (err, result) => {
  //     res.send(result)
  //   })
  // })

  // app.post("/insert", (req, res) => {
  //   const bookName = req.body.setBookName;
  //   const bookReview = req.body.setReview;
  //   const InsertQuery = "INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)";
  //   db.query(InsertQuery, [bookName, bookReview], (err, result) => {
  //     console.log(result)
  //   })
  // })

  app.listen('3002', () => { })
