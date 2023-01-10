const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test",
    database:"near_protocol"
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json("GET request to backend")
});

app.get("/users", (req, res) => {
    if(req.query.userid) {
        const q = "SELECT username, password FROM users WHERE id=" + mysql.escape(req.query.userid)
        db.query(q, (err, data) => {
            if(err) {res.json("Error in retriving user data")}
            return res.json(data)
        })
    }
    else if(req.query.username){
        const q = "SELECT username, password FROM users WHERE username=" + mysql.escape(req.query.username)
        db.query(q, (err, data) => {
            if(err) {res.json("Error in retriving user data")}
            return res.json(data)
        })
        
    }
    else
    {
        const q = "SELECT id, username, upvotes FROM users ORDER BY upvotes DESC LIMIT 5"
        db.query(q, (err, data) => {
            if(err) { res.json("Error in retriving user data")}
            return res.json(data)
        })
    }
});

app.get("/questions", (req, res) => {
    if(req.body.author_id) {
        const q = "SELECT title, question_text, username FROM questions WHERE author_id=" + mysql.escape(req.query.author_id)
        db.query(q, (err, data) => {
            if(err) {res.json("Error in retriving posted questions")}
            return res.json(data)
        })
    }
    else
    {
        const q = "SELECT q.title, q.question_text, a.username FROM questions AS q INNER JOIN users as a ON a.id = q.author_id ORDER BY q.updated DESC LIMIT 4"
        db.query(q, (err, data) => {
            if(err) { res.json(err)}
            return res.json(data)
        })
    }
});

app.post("/questions", (req, res) => {
    console.log(req)
    const q = "INSERT INTO questions (`title`, `question_text`, `author_id`) VALUES (?)";
    const values = [
        req.body.question_title,
        req.body.question_body,
        req.body.author_id,
    ];    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    console.log(req)
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080/')
});
