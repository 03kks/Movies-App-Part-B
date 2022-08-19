import React from "react";
import "./Details.css";
import "../../common/header/Header";
import Header from "../../common/header/Header.js";
import { Typography, GridList, GridListTileBar, GridListTile } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Trailer from "./Trailer";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function starHandler(e){
  var clickedId = (e.target.id).slice(1)
  for(var i = 1; i<=clickedId; i++){
    document.getElementById(("s").concat("", i)).style.color ="yellow";
  }
  for(var x = 5; x>clickedId; x--){
    document.getElementById(("s").concat("", x)).style.color ="black";
  }
}


function Details() {

  


  const location = useLocation();
  const data = location.state.movie;
  console.log(data);
  return (
    <>
      {/* <Header btnType="bookshowbtn" buttonName="BOOK SHOW"/> */}
      <div className="backbtn">
        <Link to="/">
          <Typography>{"<"} Back to Home</Typography>
        </Link>
      </div>
      <div className="flex-container">
        <div className="leftDetail"> 
          <img className="poster" alt="poster" src={data.poster_url}></img>
        </div>
        <div className="middleDetail">
          <Typography  component="h2">{data.title}</Typography> 
          <Typography><strong>Genres: </strong>{data.genres.toString()}</Typography>
          <Typography><strong>Duration: </strong>{data.duration}</Typography>
          <Typography><strong>Release Date: </strong>{new Date(data.release_date).toDateString()}</Typography>
          <Typography><strong>Rating: </strong>{data.critics_rating}</Typography>
          <div className="sixteenMargin">
          <Typography ><strong>Plot: </strong><a href={data.wiki_url}>(Wiki Link)</a>{" "+data.storyline}</Typography>
          </div>
          <div className="sixteenMargin">
          <Typography><strong>Trailer: </strong></Typography>
          <Trailer id={data.trailer_url.slice(32)}></Trailer>
          </div>
        </div>
        <div className="rightDetail">
          <Typography><strong>Rate this movie: </strong><br/>
          <StarBorderIcon onClick={starHandler} id="s1"/>
          <StarBorderIcon onClick={starHandler} id="s2"/>
          <StarBorderIcon onClick={starHandler} id="s3"/>
          <StarBorderIcon onClick={starHandler} id="s4"/>
          <StarBorderIcon onClick={starHandler} id="s5"/>
          </Typography>
          <Typography className="sixteenMargin"><strong>Artists:  </strong></Typography>
          
          <GridList cols={2} >
              {data.artists.map((item) => (
                <GridListTile key={item.id}>
                    <img alt={item.id} src={item.profile_url}></img>
                    <GridListTileBar title={item.first_name+" "+item.last_name}></GridListTileBar>
                </GridListTile>
                
              ))}
        </GridList>

          
          
        </div>
      </div>
    </>
  );
}

export default Details;
