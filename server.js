const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const cors = require("cors");


app.use(express.json());
app.use(cors());

if(true){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}


app.get('/api/', (req, res) => {
    fs.readFile("./data.json", "utf-8", (err, jsonString) => {
        const songList = JSON.parse(jsonString).songList;
        res.status(200).send(songList);
    })
});

app.get('/api/tags/', (req, res) => {
    let requestedTags = req.query.q.split('+')
    let arr = []
    fs.readFile("./data.json", "utf-8", (err, jsonString) => {
        const songList = JSON.parse(jsonString).songList;
        for(let i=0; i<songList.length; i++){
            let tags = songList[i].tags;
            let set = new Set([...tags, ...requestedTags]);
            if(tags.length == set.size){
                arr.push(songList[i])
            }
        }
        res.status(200).send(arr);
    })
});

app.post('/api/add', (req, res) => {
    const title = req.body.title;
    const artist = req.body.artist;
    const tags = req.body.tags;

    let newSong = {"title": title, "artist": artist, "tags": tags};
    fs.readFile("./data.json", "utf-8", (err, jsonString) => {
        let songList = JSON.parse(jsonString).songList;
        songList.push(newSong);
        const updatedList = {
            "songList": songList
        }
        fs.writeFile("./data.json",JSON.stringify(updatedList, null, 2), (err) =>{});
        res.status(200).send({"message":"Song Added"});
    })
});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});