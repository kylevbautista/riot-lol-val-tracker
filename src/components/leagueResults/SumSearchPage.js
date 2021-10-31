/**
 * This Component is a container component which handles all the logic
 * from when and where to grab data. Data is then sent down to the
 * appropriate presentational component
 */
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import lol_homepage from "./lol-homepage.jpg";

// Components
import TextInput from "../TextInput";
import HomePage from "../HomePage";

function ManageResults() {
  const [summonerName, setSummonerName] = useState("");
  const history = useHistory();

  const handleText = (event) => {
    setSummonerName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (summonerName.length > 0) {
      history.push("summoner/" + summonerName);
    }
    setSummonerName("");
  };

  return (
    <div className="text-white">
      <br></br>
      <img
        src={lol_homepage}
        alt="lol-homepage.jpg"
        style={{ width: 600 }}
      ></img>
      <br></br>
      <p>League of Legends</p>
      <form onSubmit={handleSearch}>
        <TextInput onChange={handleText} value={summonerName} />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default ManageResults;
