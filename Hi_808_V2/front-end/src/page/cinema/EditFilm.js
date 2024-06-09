import React from 'react';
import MovieForm from '../../components/movieForm/movieForm';

const CreateNewFilm = () => {
  const props = {data: {
    _id: "65d73c65a771b28497684fa1",
    name: "Wandering land",
    type: "movies",
    image: "https://resizing.flixster.com/praeatSxJj0ZlZzHXri7w1yxf2A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExMjYyMzFmLTAyNzUtNGU2YS1hNjM3LTQyMjAxMTRkNTM1NC53ZWJw",
    video: "https://www.youtube.com/embed/0TDII5IkI3Y?si=mlnOrcTF4YM20Knx",
    description: "The action unfold in the near future, when the Earth is in danger.The rapid extinction of the sun leads to the cooling of the planet and the threat of extinction for all living things.The global disaster that turned out to be powerless in the face of a global catastrophe, the world powers united to form a single government of the Earth and find a solution to the problem.The leading scientist managed to develop a unique project called “Wandering Earth”: powerful missile accelerators were built around the globe to shift the planet from orbit in order to ultimately send it to another star system.After 17 years of continuous movement, the Earth approached Jupiter, whose gravity was planned to be used for further acceleration, but the calculations were erroneous, which led to the threat of a new catastrophe ...",
    genre: [
        "Action",
        "Drama",
        "Fantasy"
    ],
    year: 2019,
    ageRating: 16,
    rating: 7,
    count: 1
}}
  return (
    <React.Fragment>
      <MovieForm />
      {/* <section className="movieInfo">

        <img src={props.data.image} alt="" />
        <div className="infoGrid">
          <h1>{props.data.name}</h1>

          <div className="infoBox">
            <div>
              <p className="infoName">genre</p>
              <p className="infoData">genre</p>
            </div>
            <div>
              <p className="infoName">ageRating</p>
              <p className="infoData">+{props.data.ageRating}</p>
            </div>
            <div>
              <p className="infoName">rating</p>
              <p className="infoData">{Math.round(props.data.rating)}</p>
            </div>
            <div>
              <p className="infoName">year</p>
              <p className="infoData">{props.data.year}</p>
            </div>
          </div>

          <div className="description">
            <h2 className="infoName">Description:</h2>
            <div>
              <p className="infoData">{props.data.description}</p>
            </div>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default CreateNewFilm;
