import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { toastWarnNotify } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // console.log(state)

  const getMovies = async (API) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(API);
      // console.log(data);
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state && searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else {
      toastWarnNotify('Please enter a text');
    }
  };

  return (
    <div>
      <Navbar email={state} />
      <Header handleSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
      <div className="movieContainer row m-auto container mt-3">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} email={state} />
        ))}
      </div>
    </div>
  );
};

export default Home;
