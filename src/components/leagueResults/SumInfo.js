import React from "react";
import Grid from "@mui/material/Grid";

function SumInfo({ info }) {
  return (
    <div>
      {Object.keys(info).length > 0 ? (
        <div>
          Summoner Name : {info.name} <br></br>
          Summoner Id : {info.id} <br></br>
        </div>
      ) : (
        <div>No Data</div>
      )}
      <Grid container spacing={2} style={{ border: "solid" }}>
        <Grid item xs={8}>
          {/* <Item>xs=8</Item> */}
          asdfasdf
        </Grid>
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
          asdfasdf
        </Grid>
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
          asdfasdf
        </Grid>
        <Grid item xs={8}>
          {/* <Item>xs=8</Item> */}
          asdf
        </Grid>
      </Grid>
    </div>
  );
}

export default SumInfo;
