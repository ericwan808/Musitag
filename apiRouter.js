const router = require('express').Router();
const { json } = require('body-parser');
let Song = require('./song.model');

router.route('/').get((req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const tags = req.body.tags;

  const newSong = new Song({
    title,
    artist,
    tags,
  });

  newSong.save()
  .then(() => res.json('Song added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tags/').get((req, res) => {
  let requestedTags = req.query.q.split('+')
  let arr = []
  Song.find().then(songs => {
    for(let i=0; i<songs.length; i++){
      let tags = songs[i].tags;
      let set = new Set([...tags, ...requestedTags]);
      if(tags.length == set.size){
          arr.push(songs[i])
      }
    }
    res.send(arr);
  })
})

router.route('/:id').delete((req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.json('Song deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      song.title = req.body.title;
      song.artist = req.body.artist;
      song.tags = req.body.tags;

      song.save()
        .then(() => res.json('Song updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;