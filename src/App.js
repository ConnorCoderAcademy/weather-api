import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useEffect, useState } from 'react';

function App() {

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

useEffects(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  console.log("Latitude is: ", lat);
  console.log("Longitude is: ", long);
}, [lat, long]);




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
