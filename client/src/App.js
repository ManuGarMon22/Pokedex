import "./App.css";

import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import CardsContainer from "./Components/CardsContainer/CardsContainer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Searched from "./Components/Searched/Searched.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import CreatePokemon from "./Components/CreatePokemon/CreatePokemon.jsx";
import DetailedCard from "./Components/DetailedCard/DetailedCard.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <NavBar />
          <Searched />
          <Filter />
          <h1>Inicio</h1>
          <CardsContainer />
        </Route>
        <Route path="/search/:name">
          <NavBar />
          <Searched />
          <h1>Busqueda:</h1>
          {/* <CardsContainer /> */}
        </Route>
        <Route path="/create">
          <NavBar />
          <CreatePokemon />
        </Route>
        <Route path="/pokemon/:id">
          <NavBar />
          <h1>Detalles del Pokemon {}</h1>
          {/* <DetailedCard /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
