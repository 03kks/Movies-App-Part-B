import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../common/header/Header";
import Header from "../../common/header/Header.js";
import SingleLineImageList from "./movieList";
import moviesData from "../../common/moviesData";
import TitlebarImageList from "./leftImageList";
import SimpleCard, { userSelection } from "./filters";
import genres from "./genre";
import artists from "./artists";

function Home() {


  const [homeState, setHomeState] = useState({
    data: moviesData,
    genres: genres,
    artists: artists,
    userSelection: moviesData,
  });
    
  const [movieState, setMovieState] = useState(moviesData);

  var filterHandler = ()=> {
    if (
      userSelection.name === "" &&
      userSelection.releaseDateEnd === "" &&
      userSelection.releaseDateStart === "" &&
      userSelection.genres.length === 0 &&
      userSelection.artists.length === 0
    ) {
      const state = moviesData;
      setMovieState(state);
      return moviesData;
    } 
    
    else {
      const filteredMovies = movieState.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase()||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||parseInt(new Date(movie.release_date).getTime()) <=  parseInt(new Date(userSelection.releaseDateEnd).getTime())||
          parseInt(new Date(movie.release_date).getTime()) >=  parseInt(new Date(userSelection.releaseDateStart).getTime()) || movie.artists.some((artist) =>
            userSelection.artists.includes(
              `${artist.first_name} ${artist.last_name}`
            )
          )
        ) {
          return movie;
        }
        else
          return null;
      });

      
      const filteredState = filteredMovies;
      setMovieState(filteredState);
      console.log(filteredState)
    }
  };


    return (
      <div>
        {/* <Header  btnType="hiddenbtn"/> */}
        <span className="heading">Upcoming Movies</span>
        <SingleLineImageList moviesData={homeState.data} />

        <div className="flex-container">
          <div className="left">
            <TitlebarImageList moviesData={movieState} />
          </div>
          <div className="right">
            <SimpleCard
              genres={homeState.genres}
              artists={homeState.artists}
              filterHandler={filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }


export default Home;
