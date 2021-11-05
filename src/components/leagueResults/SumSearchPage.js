/**
 * This Component is a container component which handles all the logic
 * from when and where to grab data. Data is then sent down to the
 * appropriate presentational component
 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
import * as userActions from "../../redux/actions/userActions";
import { useHistory } from "react-router";
import lol_homepage from "./lol-homepage.jpg";

// Components
import TextInput from "../TextInput";
import { FormControlUnstyledContext } from "@mui/core";

function ManageResults({ actions }) {
  const [summonerName, setSummonerName] = useState("");
  const history = useHistory();

  useEffect(() => {
    actions.logout();
    console.log("ok");
  }, []);

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

function mapStateToProps(state) {
  return {
    data: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(userActions.logout, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageResults);
