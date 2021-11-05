/**
 * Container component for handling the logic needed
 * to display Summoner Data
 */
import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as summonerActions from "../../redux/actions/summonerActions";
import { bindActionCreators } from "redux";
import * as summonerApi from "../../api/summonerApi";
import SumInfo from "./SumInfo";
import ManageSumMatchList from "./ManageSumMatchList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function SummonerData(props) {
  const summonerId = props.match.params.sumName;
  const [summonerMatchInfo, setSummonerMatchInfo] = useState({});

  useEffect(() => {
    getSummonerbyName(summonerId);
  }, [summonerId]);

  useEffect(() => {
    if (Object.keys(props.summoner.data).length > 0) {
      getSummonerMatchIds(props.summoner.data.puuid);
    }
  }, [props.summoner.data]);

  const getSummonerbyName = (name) => {
    props.actions.getSumData(name);
  };

  // grabs searched summoner's last 20 matches
  const getSummonerMatchIds = (puuid) => {
    props.actions.getMatchList(puuid);
  };

  return (
    <div>
      <br></br>

      {props.summoner.error && (
        <h1 style={{ color: "white" }}>OOPS.... SOMETHING WENT WRONG</h1>
      )}
      {Object.keys(props.summoner.data).length > 0 ? (
        <SumInfo info={props.summoner.data} />
      ) : props.summoner.error ? (
        <></>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <br></br>
      {props.summoner.matchIds.length > 0 ? (
        <ManageSumMatchList
          matchList={props.summoner.matchIds}
          name={props.summoner.data.name}
        />
      ) : props.summoner.error ? (
        <></>
      ) : props.summoner.matchIds.length === 0 ? (
        <h1 style={{ color: "white" }}>No Matches Found</h1>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summoner: state.summoner,
    apiCallsInProgress: state.apiCallsInProgress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSumData: bindActionCreators(
        summonerActions.loadSummonerName,
        dispatch
      ),
      getMatchList: bindActionCreators(
        summonerActions.loadSummonerMatchIds,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SummonerData);
