import React from "react";
import { useState, useEffect } from "react";
import * as summonerApi from "../../api/summonerApi";

// Components
import TextInput from "../TextInput";

function ManageResults() {
  const [summonerData, setSummonerData] = useState({});
  const [summonerName, setSummonerName] = useState("");
  const [summonerMatches, setSummonerMatches] = useState([]);
  const [summonerMatchInfo, setSummonerMatchInfo] = useState({});

  useEffect(() => {
    console.log("Summoner Data useEffect :", summonerData);
    console.log("length", Object.keys(summonerData).length);
    console.log("puuid: ", summonerData.puuid);
    if (Object.keys(summonerData).length > 0) {
      getSummonerMatchIds(summonerData.puuid);
    }
  }, [summonerData]);

  useEffect(() => {
    console.log(summonerMatches);
    console.log(summonerMatches[0]);
    if (summonerMatches.length > 0) {
      getSummonerMatchInfo(summonerMatches[0]);
    }
  }, [summonerMatches]);

  useEffect(() => {
    if (Object.keys(summonerMatchInfo).length > 0) {
      console.log(summonerMatchInfo);
    }
  }, [summonerMatchInfo]);

  // gets searched summoner's user data if it exists
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

  const handleText = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getSummonerbyName(summonerName);
    console.log("text field", summonerName);
  };

  return (
    <div className="bg-dark text-white">
      <h1>NA OP GG Clone</h1>
      <p>League of Legends</p>
      <form onSubmit={handleSearch}>
        <TextInput onChange={handleText} />
        <button type="submit">Search</button>
      </form>
      {Object.keys(summonerData).length > 0 ? (
        <div>
          Summoner Name : {summonerData.name} <br></br>
          Summoner Id : {summonerData.id} <br></br>
        </div>
      ) : (
        <div>No Data</div>
      )}
      {summonerMatches.length > 0 ? (
        <div>
          {summonerMatches.map((match) => (
            <div key={match}>{match}</div>
          ))}
        </div>
      ) : (
        <div>No Match data</div>
      )}
    </div>
  );
}

export default ManageResults;
