import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ManageSummonerPage from "./leagueResults/ManageSummonerPage";
import { useEffect } from "react";
import Header from "./common/Header";

function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = "#121212"
  },[])
  return (
    <div className="App">
      <Header/>
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
