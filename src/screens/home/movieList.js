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
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function SingleLineImageList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={250} cols={6}>
        {props.moviesData.map((item) => (
          
          <ImageListItem key={item.poster_url}>
          <Link to="/details" state={{ movie: item }}>
            <img className="image" src={item.poster_url} alt={item.title} />
            </Link>
            <ImageListItemBar
              title={item.title}
              classes={
                {
                  // root: classes.titleBar,
                  // title: classes.title,
                }
              }
            />
          </ImageListItem>
          
        ))}
      </ImageList>
    </div>
  );
}
