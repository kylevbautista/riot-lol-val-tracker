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
import * as valorantActions from "../../redux/actions/valorantActions";
import * as valorantApi from "../../api/valorantApi";
import { beginApiCall } from "../../redux/actions/apiStatusAction";
import { useHistory } from "react-router";

// Components
import TextInput from "../TextInput";
import { Zoom } from "@mui/material";
import SumLeaderBoard from "./SumLeaderBoard";
import ValLeaderBoard from "./ValLeaderBoard";
import lol_homepage from "./lol-homepage.jpg";

function ManageResults({ actions, lolBoards, data, valContent, valBoards }) {
  const [summonerName, setSummonerName] = useState("");
  // const [actid, setActid] = useState("");
  const [valInfo, setValInfo] = useState({});
  const [valLeaderBoards, setValLeaderBoards] = useState({});
  const history = useHistory();

  useEffect(() => {
    actions.logout();
    actions.loadLolLeaderBoard();
    //actions.loadValContent();
    getValInfo();
  }, []);

  useEffect(() => {
    if (Object.keys(valInfo).length > 0) {
      let acts = valInfo.acts;
      for (let i = acts.length - 1; i >= 0; i--) {
        if (acts[i].isActive && acts[i].type === "act") {
          // setActid(acts[i].id);
          getValLeaderBoard(acts[i].id);
          break;
        }
      }
      console.log(valInfo);
    }
  }, [valInfo]);

  useEffect(() => {
    if (Object.keys(valLeaderBoards).length > 0) {
      console.log("leader", valLeaderBoards);
    }
  }, [valLeaderBoards]);

  const getValInfo = () => {
    //actions.startApiCall();
    valorantApi
      .getContent()
      .then((data) => {
        setValInfo(data);
      })
      .catch((err) => {
        actions.valorantApiError();
        console.log("getValInfo fail");
      });
  };

  const getValLeaderBoard = (actid) => {
    valorantApi
      .getLeaderBoards(actid)
      .then((data) => {
        setValLeaderBoards(data);
      })
      .catch((err) => {
        actions.valorantApiError();
        console.log("getValLeaderBoard fail");
      });
  };

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
          <SumLeaderBoard
            data={data}
            lolBoards={lolBoards}
            handleClick={handleClick}
          />
          {/* || */}
          <ValLeaderBoard
            data={data}
            valLeaderBoards={valLeaderBoards}
            handleClick={handleClick}
          />
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
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/** */}
          <div className="col-10">
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
              <img
                src={lol_homepage}
                alt="lol-homepage.jpg"
                style={{ width: "100%", padding: "5px", marginTop: "35px" }}
              ></img>
            </Zoom>
          </div>{" "}
          {/** */}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.summoner,
    lolBoards: state.summoner.leaderBoards,
    valContent: state.valorant.content,
    valBoards: state.valorant.leaderBoards,
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
      loadValContent: bindActionCreators(valorantActions.loadContent, dispatch),
      loadValLeaderBoard: bindActionCreators(
        valorantActions.loadLeaderBoard,
        dispatch
      ),
      valorantApiError: bindActionCreators(
        valorantActions.valorantApiError,
        dispatch
      ),
      startApiCall: bindActionCreators(beginApiCall, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageResults);
