import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SummonerPage from "./leagueResults/SummonerPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/summoner" component={SummonerPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
