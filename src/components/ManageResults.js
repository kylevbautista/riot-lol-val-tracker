import React from "react";
import { useState } from "react";
import * as summonerApi from "../api/summonerApi";

// Components
import TextInput from "./TextInput";

function ManageResults() {
  const [summonerData, setSummonerData] = useState({});

  const handleClick = () => {
    summonerApi
      .byName("kinjazzz")
      .then((data) => {
        setSummonerData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function test() {
    console.log("Summoner Data", summonerData);
    console.log("legnth", Object.keys(summonerData).length);
  }

  return (
    <div className="bg-dark text-white">
      <div>NA OP GG Clone</div>
      <label htmlFor="Main Search">LOL</label>
      <TextInput />
      <button onClick={handleClick}>Api Test</button>
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
