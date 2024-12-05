const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
// const quizRoutes = require();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", router)
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send({"error" : err})
});

app.listen(PORT, ()=>{
    console.log(`App is running on port: `+ PORT);
});

module.exports = app;
