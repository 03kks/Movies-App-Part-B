import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "theme.palette.background.paper",
  },
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },

  imageList: {
    width: "100%",
    height: 450,
    overflow: "auto",
    paddingRight: "20px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TitlebarImageList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ImageList rowHeight={350} cols={4} className={classes.imageList}>
          
          {props.moviesData.map((item) => (

            
            <ImageListItem key={item.title} className="leftListItem">
            
                <Link to="/details" state={{ movie: item }}>
                <img className="image" src={item.poster_url} alt={item.title} />
                </Link>        
                <ImageListItemBar
                  title={item.title}                  
                  subtitle={<span>Release Date: {new Date(item.release_date).toDateString()}</span>}
                />
              
            </ImageListItem>

          ))}
        </ImageList>
      </div>
    </div>
  );
}
