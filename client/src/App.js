import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import CardsContainer from "./Components/CardsContainer/CardsContainer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <NavBar />
          <h1>Henry Pokemon</h1>
          <CardsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
