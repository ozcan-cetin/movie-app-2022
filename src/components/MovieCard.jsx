import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieCard = ({ movie, email }) => {
  const { id, title, vote_average, overview, poster_path } = movie;
  const navigate = useNavigate();

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-3 border border-success mx-auto movieCard">
        <div className="movie-img" onClick={()=>navigate("/details/" + id, {state:email})}>
          <img
            src={poster_path ? IMG_API + poster_path : defaultImage}
            alt={title}
          />
        <div className="overview">
          <p>{overview}</p>
        </div>
        </div>
        <div className="d-flex justify-content-between align-items-center cardBottom">
          <div className="d-flex align-items-center">
          <h5 className="m-0">{title}</h5>
          </div>
          <div>
            <h4
              className={`rounded-5 p-3 m-auto tag ${setVoteClass(
                vote_average
              )}`}
            >
              {vote_average}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
