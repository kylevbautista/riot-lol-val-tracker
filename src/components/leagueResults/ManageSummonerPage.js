/**
 * Container component for handling the logic needed
 * to display Summoner Data
 */
import React from "react";
import { useState, useEffect } from "react";
import * as summonerApi from "../../api/summonerApi";
import SumInfo from "./SumInfo";
import ManageSumMatchList from "./ManageSumMatchList";

function SummonerData(props) {
  const summonerId = props.match.params.sumName;
  const [summonerData, setSummonerData] = useState({});
  const [summonerMatches, setSummonerMatches] = useState([]);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState({});
  const [error, setError] = useState(false);
  const [summonerRank, SetSummonerRank] = useState([]);

  useEffect(() => {
    getSummonerbyName(summonerId);
  }, [summonerId]);

  useEffect(() => {
    if (Object.keys(summonerData).length > 0) {
      console.log("Summoner Data useEffect :", summonerData);
      getSummonerRank(summonerData.id);
      getSummonerMatchIds(summonerData.puuid);
    }
  }, [summonerData]);

  useEffect(() => {
    if (summonerMatches.length > 0) {
      console.log("summonerMatches useEffect", summonerMatches[0]);
      getSummonerMatchInfo(summonerMatches[0]);
    }
  }, [summonerMatches]);

  useEffect(() => {
    if (Object.keys(summonerMatchInfo).length > 0) {
      console.log("summonerMatchInfo", summonerMatchInfo.info);
      console.log("match participants", summonerMatchInfo.info.participants);
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
          setError(true);
          console.log(err);
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

  const getSummonerRank = (encryptedId) => [
    summonerApi
      .getRank(encryptedId)
      .then((data) => {
        SetSummonerRank(data);
      })
      .catch((err) => {
        console.log(err);
      }),
  ];
  return (
    <div>
      <br></br>
      {error && <h1 style={{ color: "white" }}>PLAYER NOT FOUND</h1>}
      {Object.keys(summonerData).length > 0 && summonerRank.length > 0 ? (
        <SumInfo info={summonerData} rank={summonerRank[0]} />
      ) : error ? (
        <></>
      ) : (
        <p>Loading...</p>
      )}
      <br></br>
      {summonerMatches.length > 0 &&
      Object.keys(summonerMatchInfo).length > 0 ? (
        <ManageSumMatchList
          matchList={summonerMatches}
          name={summonerData.name}
        />
      ) : error ? (
        <></>
      ) : (
        <p>Loading...</p>
      )}
      {/* <p>Name: {summonerMatchInfo.info.participants[0].summonerName}</p> */}
    </div>
  );
}

export default SummonerData;
