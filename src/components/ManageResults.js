import React from "react";
import { useState } from "react";

// Components
import TextInput from "./TextInput";

function ManageResults() {
  const [sumData, setSumData] = useState();

  const summonerName = (name) => {
    let url =
      "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      "kinjazzz" +
      "?api_key=RGAPI-8aa107fa-e326-43fe-8542-f2ec63cd7d2c";
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((summoner) => {
        console.log(summoner.id);
        setSumData(summoner);
        console.log(sumData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Easier way to fetch and handle promises.
  // Essentially async await is syntactical sugar for fetch and prmoises
  //   async function byname() {
  //     let url =
  //       "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
  //       "kinjazzz" +
  //       "?api_key=RGAPI-74a6d702-8173-4fb5-b931-64415cc7ecb5";
  //     const response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data);
  //   }

  return (
    <div className="bg-dark text-white">
      <div>NA OP GG Clone</div>
      <label htmlFor="Main Search">LOL</label>
      <TextInput />
      <button onClick={summonerName}>Api Test</button>
    </div>
  );
}

export default ManageResults;
