import React from 'react';
import './App.css';
import ParticleBackground from "./ParticleBackground";


function App() {
  return (
    <div>
      <ParticleBackground />
      <Home />
    </div>
  );
}

function Home() {
  return (
    <div id="center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Welcome to Neyliks Home!</h1>
        <p className="custom-subTitle">I am just creating some maybe useless stuff and thats it :D</p>
      </div>
    </div>
  );
}

export default App;
