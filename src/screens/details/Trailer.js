import React from 'react';
import YouTube from 'react-youtube';

function Trailer (props) {

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    console.log(props.id)
    return <YouTube videoId={props.id} opts={opts} onReady={_onReady} />;
  }

   function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

export default Trailer;