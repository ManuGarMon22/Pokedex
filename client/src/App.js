import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <h1>Henry Pokemon</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
