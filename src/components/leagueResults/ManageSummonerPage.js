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

  // useEffect(() => {
  //   if (Object.keys(props.summoner).length > 0)
  //     console.log("REDUX sumData:", props.summoner);
  // }, [props.summoner]);

  useEffect(() => {
    getSummonerbyName(summonerId);
  }, [summonerId]);

  useEffect(() => {
    if (Object.keys(props.summoner.data).length > 0) {
      getSummonerMatchIds(props.summoner.data.puuid);
    }
  }, [props.summoner.data]);

  useEffect(() => {
    if (props.summoner.matchIds.length > 0) {
      getSummonerMatchInfo(props.summoner.matchIds[0]);
    }
  }, [props.summoner.matchIds]);

  // useEffect(() => {
  //   if (Object.keys(summonerMatchInfo).length > 0) {
  //     console.log("summonerMatchInfo", summonerMatchInfo.info);
  //     console.log("match participants", summonerMatchInfo.info.participants);
  //   }
  // }, [summonerMatchInfo]);

  const getSummonerbyName = (name) => {
    props.actions.getSumData(name);
  };
  // Gets all Match data pertaining to matching Match ID
  const getSummonerMatchInfo = (matchId) => {
    summonerApi
      .getMatchData(matchId)
      .then((data) => {
        setSummonerMatchInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      {props.summoner.matchIds.length > 0 &&
      Object.keys(summonerMatchInfo).length > 0 ? (
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
