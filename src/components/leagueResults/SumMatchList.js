import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Paper, ButtonBase, Slide } from "@mui/material";
import shib_coin from "./shib_coin.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SumMatchList({ participants, match, name }) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (participants.length > 0) {
      for (let i = 0; i < participants.length; i++) {
        if (participants[i].teamId === 100) {
          setTeam1((team1) => [...team1, participants[i]]);
        } else if (participants[i].teamId === 200) {
          setTeam2((team2) => [...team2, participants[i]]);
        }
        if (participants[i].summonerName === name) {
          const sum = participants[i];
          setPlayer(sum);
        }
      }
    }
  }, [participants]);

  return (
    <div>
      <Slide
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        {...{ timeout: 1000 }}
      >
        <Grid container spacing={0} direction="row">
          <Paper
            sx={{ p: 2, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
            style={{
              backgroundColor: "#222222",
              boxShadow: "0 1px 6px 1px black",
              // justifyContent: "center",
              // alignItems: "center",
              // justifyItems: "center",
              // alignContent: "center",
            }}
          >
            {/* Main Grid inside Paper Component. Holds picture, info, and teams sub grids  */}
            <Grid item container spacing={0} direction="row">
              {/** Grid that contains picture */}
              <Grid
                item
                container
                xs={12}
                md={3}
                color="white"
                direction="column"
                alignItems="center"
              >
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={shib_coin} />
                </ButtonBase>
              </Grid>
              {/** Grid that contains match info */}
              <Grid
                item
                container
                xs={12}
                md={3}
                color="white"
                direction="column"
              >
                {player.win ? (
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="#00FFFF"
                    fontWeight="600"
                  >
                    Victory
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="red"
                    fontWeight="600"
                  >
                    Defeat
                  </Typography>
                )}
                <Typography variant="body2" gutterBottom>
                  GameMode: {match.info.gameMode}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  KDA: {player.kills}/{player.deaths}/{player.assists}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Ranked/Classic
                </Typography>
              </Grid>
              {/** Grid that contains teams info */}
              <Grid item container xs={12} md={6} color="white" direction="row">
                {/** Grid that contains team 1 */}
                <Grid item container xs={6} direction="column">
                  <Typography variant="subtitle1" gutterBottom color="white">
                    Team 1
                  </Typography>
                  {team1.map((summoner) =>
                    summoner.summonerName === name ? (
                      <Typography
                        key={summoner.puuid}
                        variant="body1"
                        color="white"
                        fontWeight="600"
                      >
                        {summoner.summonerName}
                      </Typography>
                    ) : (
                      <Typography
                        key={summoner.puuid}
                        variant="caption"
                        color="white"
                      >
                        {summoner.summonerName}
                      </Typography>
                    )
                  )}
                </Grid>
                {/** Grid that contains team 2*/}
                <Grid item container xs={6} direction="column">
                  <Typography variant="subtitle1" gutterBottom color="white">
                    Team 2
                  </Typography>
                  {team2.map((summoner) =>
                    summoner.summonerName === name ? (
                      <Typography
                        key={summoner.puuid}
                        variant="body1"
                        color="white"
                        fontWeight="600"
                      >
                        {summoner.summonerName}
                      </Typography>
                    ) : (
                      <Typography
                        key={summoner.puuid}
                        variant="caption"
                        color="white"
                      >
                        {summoner.summonerName}
                      </Typography>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Slide>
      <br></br>
    </div>
  );
}

export default SumMatchList;
