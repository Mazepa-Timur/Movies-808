const { Schema, model } = require('mongoose');
const genres = require('../constant/genre.enum');
const film_schema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, default: '' },
    video: { type: String, default: '' },
    description: { type: String, required: true },
    genre: [{ type: String, enum: genres, required: true }],
    year: { type: String, required: true },
    ageRating: { type: Number, required: true },
    rating: { type: Number, default: 1 },
    count: { type: Number, default: 0 }
  }
);

module.exports = model('Film', film_schema);