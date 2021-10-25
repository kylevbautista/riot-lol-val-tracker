import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ManageSummonerPage from "./leagueResults/ManageSummonerPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/summoner/:sumName" component={ManageSummonerPage} />
        {/* <Route path="/summoner" component={SummonerPage} /> */}
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
