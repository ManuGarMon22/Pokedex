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
          <CardsContainer />
        </Route>
        <Route path="/create">
          <NavBar />
          <CreatePokemon />
        </Route>
        <Route
          path="/pokemon/:id"
          render={({ match }) => (
            <div>
              <NavBar />
              <DetailedCard id={match.params.id} />
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
