import React from "react";
import { useState, useEffect } from "react";

// Redux functions
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as valorantActions from "../../redux/actions/valorantActions";
import * as valorantApi from "../../api/valorantApi";

import LeaderBoardExpanded from "./LeaderBoardExpanded";

function ManageLeaderBoardExpanded({ actions, valData }) {
  const [valInfo, setValInfo] = useState({});
  const [valLeaderBoards, setValLeaderBoards] = useState({});

  useEffect(() => {
    getValInfo();
  }, []);

  useEffect(() => {
    if (Object.keys(valInfo).length > 0) {
      let acts = valInfo.acts;
      for (let i = acts.length - 1; i >= 0; i--) {
        if (acts[i].isActive && acts[i].type === "act") {
          getValLeaderBoard(acts[i].id);
          break;
        }
      }
    }
  }, [valInfo]);

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

  return (
    <LeaderBoardExpanded data={valData} valLeaderBoards={valLeaderBoards} />
  );
}

function mapStateToProps(state) {
  return {
    data: state.summoner,
    valData: state.valorant,
    lolBoards: state.summoner.leaderBoards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadValContent: bindActionCreators(valorantActions.loadContent, dispatch),
      loadValLeaderBoard: bindActionCreators(
        valorantActions.loadLeaderBoard,
        dispatch
      ),
      valorantApiError: bindActionCreators(
        valorantActions.valorantApiError,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLeaderBoardExpanded);
