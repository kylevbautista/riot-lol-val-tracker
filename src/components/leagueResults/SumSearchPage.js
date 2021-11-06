/**
 * This Component is a container component which handles all the logic
 * from when and where to grab data. Data is then sent down to the
 * appropriate presentational component
 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import * as userActions from "../../redux/actions/userActions";
import * as summonerActions from "../../redux/actions/summonerActions";
import { useHistory } from "react-router";
import lol_homepage from "./lol-homepage.jpg";

// Components
import TextInput from "../TextInput";
import { Slide, Grow } from "@mui/material";

function ManageResults({ actions, lolBoards }) {
  const [summonerName, setSummonerName] = useState("");
  const history = useHistory();

  useEffect(() => {
    actions.logout();
    actions.loadLolLeaderBoard();
    console.log("ok");
  }, []);

  const handleText = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (summonerName.length > 0) {
      history.push("summoner/" + summonerName);
    }
    setSummonerName("");
  };

  return (
    <div className="text-white">
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/* || */}
          <div className="col-12 col-md-6">
            <p>League of Legends LeaderBoard</p>
            <div
              className="container"
              style={{
                height: "225px",
                width: "100%",
                overflowY: "scroll",
              }}
            >
              {Object.keys(lolBoards).length > 0 ? (
                lolBoards.entries.map((summoner, index) => (
                  <Slide
                    direction="up"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    {...{ timeout: 1000 }}
                  >
                    <div
                      className="row p-2 mb-1 bg-dark rounded"
                      key={summoner.summonerId}
                      style={{
                        backgroundColor: "#222222",
                        boxShadow: "0 1px 6px 1px black",
                      }}
                    >
                      <div className="col-3">Rank: {index + 1}</div>
                      <div className="col-9">{summoner.summonerName}</div>
                    </div>
                  </Slide>
                ))
              ) : (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              )}
            </div>
          </div>
          {/* || */}
          <div className="col-12 col-md-6">
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <img
                src={lol_homepage}
                alt="lol-homepage.jpg"
                style={{ width: "100%", padding: "5px", marginTop: "35px" }}
                class="animated bounce infinite"
              ></img>
            </Grow>
          </div>
          {/* || */}
        </div>
        <form onSubmit={handleSearch}>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div className="col-11 col-md-6">
              <TextInput onChange={handleText} value={summonerName} />
            </div>
            <div className="col-auto col-md-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* || */}
      {/* <div className="container">
        <div className="row">
          <div
            className="col"
            style={{ border: "solid 1px", borderColor: "white" }}
          >
            col1
          </div>
          <div
            className="col"
            style={{ border: "solid 1px", borderColor: "white" }}
          >
            col2
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-3"
            style={{ border: "solid 1px", borderColor: "white" }}
          >
            col-3 // -3 smallest
          </div>
          <div
            className="col-3"
            style={{ border: "solid 1px", borderColor: "white" }}
          >
            col-3
          </div>
          <div
            className="col-auto"
            style={{ border: "solid 1px", borderColor: "white" }}
          >
            variable width contentssssssssssss
          </div>
        </div>
      </div> */}
      {/* || */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state,
    lolBoards: state.summoner.leaderBoards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(userActions.logout, dispatch),
      loadLolLeaderBoard: bindActionCreators(
        summonerActions.loadLeaderBoards,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageResults);
