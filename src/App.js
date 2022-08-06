import { React, useState, useEffect } from "react";
import Carousel from "./Carousel";
import './App.css';
import Quiz from "./Quiz";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  const [apiData, setApidata] = useState(null);

  useEffect(
    () => {
      fetch('http://hp-api.herokuapp.com/api/characters/students')
        .then(r => r.json())
        .then(data => setApidata(data));
    }, []
  )

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Carousel">
            {apiData && <Carousel apiData={apiData} />}
          </Route>
          
          <Route path="/Quiz">
            <Quiz> </Quiz>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
