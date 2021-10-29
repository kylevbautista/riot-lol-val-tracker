import React from "react";
import { Grid, ListItemText, ListItemButton } from "@mui/material";

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
      {/* <Grid
        container
        spacing={0}
        style={{ border: "solid" }}
        direction="column"
        justifyContent="center"
        alignItems="left"
      >
        <Grid item xs={8}>
          <ListItemButton>
            <ListItemText>xs=8</ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item xs={4}>
          <ListItemButton>
            <ListItemText>xs=4</ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item xs={4}>
          <ListItemButton>
            <ListItemText>xs=4</ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item xs={8}>
          <ListItemButton>
            <ListItemText>xs=8</ListItemText>
          </ListItemButton>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default SumInfo;
