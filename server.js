const express = require('express');
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

if(false){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}

const uri = process.env.MONGODB_URI || "mongodb+srv://waner:1HkiGIKmbabxSz9u@cluster0.wnuipjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const apiRouter = require('./apiRouter')
app.use('/api', apiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});