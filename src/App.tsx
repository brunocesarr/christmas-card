import { Card, CardContent, Divider, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.scss';

import HoHoHo from './assets/gifs/tenor.gif';
import MusicaNatal from './assets/sounds/jingleBells.mp3';

import TextAnimation from './components/TextAnimation';

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    minWidth: 500,
    maxWidth: 500,
    minHeight: 500,
    backgroundColor: '#9297ae',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Langar, cursive',
  },
  body: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: '1.2em',
  },
  img: {
    padding: '10px 0',
    minWidth: 400,
    maxWidth: 400,
  }
});

const App: React.FC = () => {
  const numFlakes = 500;
  const classes = useStyles();

  useEffect(() => {
    console.log(MusicaNatal);
    const audioEl: HTMLAudioElement = document.getElementsByClassName("audio-element")[0] as HTMLAudioElement;
    audioEl.play();
  }, [])

  const renderFlakes = () => {
    const flakes = [];
    for (let index = 0; index < numFlakes; index++) {
      flakes.push(<div key={index} className="snow-flake"></div>);
    }
    return flakes;
  }

  return (
    <div className="App">
      <Card className={classes.card} variant="elevation" elevation={5}>
        <CardContent>
          <Divider variant="middle"/>
          <TextAnimation></TextAnimation>
          <Divider variant="middle"/>
          <img src={HoHoHo} alt="HoHoHo" className={classes.img}/>
          <Divider variant="middle"/>
        </CardContent>
      </Card>
      <div className="snowflakes">
        {renderFlakes()}
      </div>
      <div>
        <audio className="audio-element" loop autoPlay>
          <source src={MusicaNatal}></source>
        </audio>
      </div>
    </div>
  );
}

export default App;
