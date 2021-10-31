import React from "react";
import { useState, useEffect } from "react";
import * as summonerApi from "../../api/summonerApi";
import SumMatchList from "./SumMatchList";

function ManageSumMatchList({ matchList, name }) {
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
    summonerApi
      .getMatchData(matchId)
      .then((data) => {
        setMatchInfo((matchInfo) => [...matchInfo, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const see = () => {
  //   console.log(matchInfo);
  // };

  return (
    <div>
      {/* <button onClick={see}>see</button> */}
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

export default ManageSumMatchList;
