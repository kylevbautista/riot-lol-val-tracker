/**
 * Container component that handles logic needed to
 * get and display match list data
 */
import React from "react";
import { connect } from "react-redux";
import * as summonerActions from "../../redux/actions/summonerActions";
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import * as summonerApi from "../../api/summonerApi";
import { beginApiCall } from "../../redux/actions/apiStatusAction";
import SumMatchList from "./SumMatchList";

function ManageSumMatchList({ matchList, name, actions }) {
  const [matchInfo, setMatchInfo] = useState([]);

  useEffect(() => {
    if (matchList.length > 0) {
      for (let i = 0; i < matchList.length; i++) {
        getMatchInfo(matchList[i]);
        if (i === 10) {
          break;
        }
      }
    }
  }, [matchList]);

  // Gets all Match data pertaining to matching Match ID
  const getMatchInfo = (matchId) => {
    actions.beginApiCall();
    summonerApi
      .getMatchData(matchId)
      .then((data) => {
        setMatchInfo((matchInfo) => [...matchInfo, data]);
        actions.endApiCall();
      })
      .catch((err) => {
        actions.apiError();
        console.log(err);
      });
  };

  return (
    <div
      style={{
        flexGrow: "100",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      {matchInfo.length > 0 ? (
        matchInfo.map((match) => (
          <SumMatchList
            key={match.metadata.matchId}
            match={match}
            participants={match.info.participants}
            name={name}
          />
        ))
      ) : (
        <p>Loading...</p>
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
      apiError: bindActionCreators(summonerActions.summonerApiError, dispatch),
      beginApiCall: bindActionCreators(beginApiCall, dispatch),
      endApiCall: bindActionCreators(
        summonerActions.loadSummonerMatchInfoSuccess,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSumMatchList);
