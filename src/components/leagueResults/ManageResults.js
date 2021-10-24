import React from "react";
import { useState } from "react";
import * as summonerApi from "../../api/summonerApi";

// Components
import TextInput from "../TextInput";

function ManageResults() {
  const [summonerData, setSummonerData] = useState({});
  const [summonerName, setSummonerName] = useState("");

  const getSummonerbyName = (name) => {
    if (name.length > 0) {
      summonerApi
        .byName(name)
        .then((data) => {
          setSummonerData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("EMPTY FIELD");
    }
  };
  const handleText = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getSummonerbyName(summonerName);
  };

  function test() {
    console.log("Summoner Data", summonerData);
    console.log("length", Object.keys(summonerData).length);
    console.log("text field", summonerName);
  }

  return (
    <div className="bg-dark text-white">
      <h1>NA OP GG Clone</h1>
      <p>League of Legends</p>
      <form onSubmit={handleSearch}>
        <TextInput onChange={handleText} />
        <button type="submit">Search</button>
      </form>
      <button onClick={test}>see</button>
      {Object.keys(summonerData).length > 0 ? (
        <div>
          Summoner Name : {summonerData.name} <br></br>
          Summoner Id : {summonerData.id}
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default ManageResults;
