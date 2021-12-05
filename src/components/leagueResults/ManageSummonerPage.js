/**
 * Container component for handling the logic needed
 * to display Summoner Data
 */
import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as summonerActions from "../../redux/actions/summonerActions";
import { bindActionCreators } from "redux";
import SumInfo from "./SumInfo";
import ManageSumMatchList from "./ManageSumMatchList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

function SummonerData(props) {
  const summonerId = props.match.params.sumName;

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
  const handleFollow = () => {
    if (props.isLoggedIn) {
      //do something
    } else {
      alert("Login to Add");
    }
  };

  return (
    <div>
      <br></br>
      {props.summoner.error && (
        <h1 style={{ color: "white" }}>OOPS.... SOMETHING WENT WRONG</h1>
      )}
      {Object.keys(props.summoner.data).length > 0 ? (
        <SumInfo info={props.summoner.data} handleFollow={handleFollow} />
      ) : props.summoner.error ? (
        <></>
      ) : (
        <Box sx={{ width: "100%" }}>
          <CircularProgress />
        </Box>
      )}
      <br></br>
      {/**
       * Checks if matchIds array have any content. If content, render ManageSumList component.
       * If no content check for errors gnerated by api call. If errors, render nothing.
       * If no erros. check if any api calls in progress. If in progress render LinearProgress.
       * If no content, errors, or api calls in progress, render No matches found.
       */}

      {props.summoner.matchIds.length > 0 ? (
        <ManageSumMatchList
          matchList={props.summoner.matchIds}
          name={props.summoner.data.name}
        />
      ) : props.summoner.error ? (
        <></>
      ) : props.apiCallsInProgress ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <h1 style={{ color: "white" }}>No Matches Found</h1>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summoner: state.summoner,
    apiCallsInProgress: state.apiCallsInProgress,
    isLoggedIn: state.isLoggedIn,
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
