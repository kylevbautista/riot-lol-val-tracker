import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Paper, ButtonBase } from "@mui/material";
import image1 from "./league-of-legends.jpeg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SumMatchList({ participants, match }) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  useEffect(() => {
    if (participants.length > 0) {
      for (let i = 0; i < participants.length; i++) {
        if (participants[i].teamId === 100) {
          setTeam1((team1) => [...team1, participants[i]]);
        } else if (participants[i].teamId === 200) {
          setTeam2((team2) => [...team2, participants[i]]);
        }
      }
    }
  }, [participants]);

  return (
    <div>
      <Grid container spacing={0} direction="row">
        <Paper
          sx={{ p: 2, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
          style={{
            backgroundColor: "#222222",
            boxShadow: "0 1px 6px 1px black",
          }}
        >
          {/* Main Grid inside Paper Component. Holds picture, info, and teams sub grids  */}
          <Grid item container spacing={0} direction="row">
            {/** Grid that contains picture */}
            <Grid item container xs={3} color="white" direction="column">
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={image1} />
              </ButtonBase>
            </Grid>
            {/** Grid that contains match info */}
            <Grid item container xs={3} color="white" direction="column">
              <Typography variant="h8" gutterBottom>
                {match.metadata.matchId}
                {match.info.gameMode}
              </Typography>
              <Typography variant="h8" gutterBottom>
                Ranked/Classic
              </Typography>
            </Grid>
            {/** Grid that contains teams info */}
            <Grid item container xs={6} color="white" direction="row">
              {/** Grid that contains team 1 */}
              <Grid item container xs={6} direction="column">
                <Typography variant="subtitle1" gutterBottom color="white">
                  Team 1
                </Typography>
                {team1.map((summoner) => (
                  <Typography
                    key={summoner.puuid}
                    variant="body2"
                    color="white"
                  >
                    {summoner.summonerName}
                  </Typography>
                ))}
              </Grid>
              {/** Grid that contains team 2*/}
              <Grid item container xs={6} direction="column">
                <Typography variant="subtitle1" gutterBottom color="white">
                  Team 2
                </Typography>
                {team2.map((summoner) => (
                  <Typography
                    key={summoner.puuid}
                    variant="body2"
                    color="white"
                  >
                    {summoner.summonerName}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <br></br>
    </div>
  );
}

export default SumMatchList;
