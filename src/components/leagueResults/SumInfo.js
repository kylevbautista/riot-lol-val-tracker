import React from "react";
import { Grid, ListItemText, ListItemButton } from "@mui/material";

function SumInfo({ info }) {
  return (
    <div>
      {Object.keys(info).length > 0 ? (
        <div>
          <h1>Summoner Name : {info.name}</h1>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default SumInfo;
