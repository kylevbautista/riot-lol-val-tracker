/**
 * Container component for handling the logic needed
 * to display Summoner Data
 */
import React from "react";
import { useState, useEffect } from "react";
import * as summonerApi from "../../api/summonerApi";
import SumInfo from "./SumInfo";
import ManageSumMatchList from "./ManageSumMatchList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function SummonerData(props) {
  const summonerId = props.match.params.sumName;
  const [summonerData, setSummonerData] = useState({});
  const [summonerMatches, setSummonerMatches] = useState([]);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState({});
  const [error, setError] = useState(false);

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

  return (
    <div>
      <br></br>
      {error && (
        <h1 style={{ color: "white" }}>OOPS.... SOMETHING WENT WRONG</h1>
      )}
      {Object.keys(summonerData).length > 0 ? (
        <SumInfo info={summonerData} />
      ) : error ? (
        <></>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
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
      ) : summonerMatches.length === 0 ? (
        <h1 style={{ color: "white" }}>No Matches Found</h1>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {/* <p>Name: {summonerMatchInfo.info.participants[0].summonerName}</p> */}
    </div>
  );
}

export default SummonerData;
