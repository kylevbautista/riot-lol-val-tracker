/**
 * This Component is a container component which handles all the logic
 * from when and where to grab data. Data is then sent down to the
 * appropriate presentational component
 */
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

// Components
import TextInput from "../TextInput";

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
      <h1>NA OP GG Clone</h1>
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
