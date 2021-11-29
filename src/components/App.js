import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ManageSummonerPage from "./leagueResults/ManageSummonerPage";
import { useEffect } from "react";
import Header from "./common/Header";
import ManageLeaderBoardExpanded from "./valorantResults/ManageLeaderBoardExpanded";
import ManageLogin from "./authentication/ManageLogin";
import ManageRegister from "./authentication/ManageRegister";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#121212";
  }, []);
  return (
    <div className="asd">
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/summoner/:sumName"
            component={ManageSummonerPage}
          />
          {/* <Route path="/summoner" component={SummonerPage} /> */}
          <Route
            exact
            path="/ValorantLeaderBoard"
            component={ManageLeaderBoardExpanded}
          />
          <Route exact path="/login" component={ManageLogin} />
          <Route exact path="/register" component={ManageRegister} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
