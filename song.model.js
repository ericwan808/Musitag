const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  link: { type: String, required: true} ,
  averageRating: { type: Number, required: true },
  user: { type: String, required: true},
  tags: { type: [String], required: true }
}, {
  timestamps: true,
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;