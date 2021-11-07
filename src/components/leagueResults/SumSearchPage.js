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
import WaitLeaderBoard from "./WaitLeaderBoard";
import { Zoom, ButtonBase } from "@mui/material";

function ManageResults({ actions, lolBoards, data }) {
  const [summonerName, setSummonerName] = useState("");
  const history = useHistory();

  useEffect(() => {
    actions.logout();
    actions.loadLolLeaderBoard();
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
  const handleClick = (event) => {
    history.push("summoner/" + event.target.value);
  };
  return (
    <div className="text-white">
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/* || */}
          <div className="col-10 col-md-6">
            {data.error ? (
              <p>Error Loading LeaderBoard</p>
            ) : (
              <p>League of Legends LeaderBoard</p>
            )}
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
                  <Zoom
                    key={summoner.summonerName}
                    in={true}
                    style={{ transitionDelay: "250ms" }}
                  >
                    <div
                      className="row p-2 mb-1 rounded"
                      style={{
                        backgroundColor: "#222222",
                        boxShadow: "0 1px 6px 1px black",
                      }}
                    >
                      <div className="col-3 border-end">{index + 1}</div>
                      <div className="col-9">
                        <ButtonBase
                          onClick={handleClick}
                          value={summoner.summonerName}
                        >
                          {summoner.summonerName}
                        </ButtonBase>
                      </div>
                    </div>
                  </Zoom>
                ))
              ) : (
                <>
                  <WaitLeaderBoard />
                  <WaitLeaderBoard />
                  <WaitLeaderBoard />
                  <WaitLeaderBoard />
                  <WaitLeaderBoard />
                </>
              )}
            </div>
          </div>
          {/* || */}
          <div className="col-10 col-md-6">
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
              <img
                src={lol_homepage}
                alt="lol-homepage.jpg"
                style={{ width: "100%", padding: "5px", marginTop: "35px" }}
              ></img>
            </Zoom>
          </div>
          {/* || */}
        </div>
        <form onSubmit={handleSearch}>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div className="col-10 col-md-6">
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
    data: state.summoner,
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
