import React from "react";
import { useState, useEffect } from "react";
import * as summonerApi from "../../api/summonerApi";
import SumMatchList from "./SumMatchList";
import SumInfo from "./SumInfo";

function SummonerData(props) {
  const summonerId = props.match.params.sumName;
  const [summonerData, setSummonerData] = useState({});
  const [summonerMatches, setSummonerMatches] = useState([]);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState({});

  useEffect(() => {
    getSummonerbyName(summonerId);
  }, [summonerId]);

  useEffect(() => {
    if (Object.keys(summonerData).length > 0) {
      console.log("Summoner Data useEffect :", summonerData);
      getSummonerMatchIds(summonerData.puuid);
    }
  }, [summonerData]);

  useEffect(() => {
    if (summonerMatches.length > 0) {
      console.log(summonerMatches[0]);
      getSummonerMatchInfo(summonerMatches[0]);
    }
  }, [summonerMatches]);

  useEffect(() => {
    if (Object.keys(summonerMatchInfo).length > 0) {
      console.log(summonerMatchInfo.info);
      console.log(summonerMatchInfo.info.participants);
    }
  }, [summonerMatchInfo]);

  const getSummonerbyName = (name) => {
    if (name.length > 0) {
      summonerApi
        .byName(name)
        .then((data) => {
          setSummonerData(data);
        })
        .catch((err) => {
          console.log("Player Not Found", err);
        });
    } else {
      console.log("EMPTY FIELD");
    }
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
  // returns match ids
  const getSummonerMatchIds = (puuid) => {
    summonerApi
      .getMatchIds(puuid)
      .then((data) => {
        setSummonerMatches(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Summoner Data</h1>
      <h1>{summonerId}</h1>
      {Object.keys(summonerData).length > 0 ? (
        <SumInfo info={summonerData} />
      ) : (
        <p>Loading...</p>
      )}
      {summonerMatches.length > 0 ? (
        <SumMatchList matches={summonerMatches} />
      ) : (
        <p>Loading...</p>
      )}
      {/* <p>Name: {summonerMatchInfo.info.participants[0].summonerName}</p> */}
    </div>
  );
}

export default SummonerData;
