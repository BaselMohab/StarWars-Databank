import React, { useEffect, useRef } from 'react';
import 'animate.css';
import "../background.css";
import { Link } from 'react-router-dom';
import starWarsIntro from '../assets/audio/starwars-intro.mp3';

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
      }).catch(error => {
        console.log("Autoplay error:", error);
      });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={starWarsIntro} />
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex items-center justify-center">
            <img src="src/assets/images/starwars-logo.png" className='starwars-logo  animate__animated animate__fadeInUp animate__slower' alt="Star Wars Logo"/>
          </div>
          <div className="mb-20 animate__animated animate__fadeInUp animate__slower">
            <Link to="/library" className="explore-button px-10 py-4 capitalize text-xl rounded-lg ">
              Explore Star Wars Universe
            </Link>
          </div>
        </div>
        </div>
    </>
  );
}
