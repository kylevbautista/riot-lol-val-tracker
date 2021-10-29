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

  // console.log(match);

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
            style={{ backgroundColor: "gray" }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={image1} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {match.metadata.matchId}
                      {match.info.gameMode}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Players
                    </Typography>
                    <Grid item xs container>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Team 1
                        </Typography>
                        {team1.map((summoner) => (
                          <Typography
                            key={summoner.puuid}
                            variant="body2"
                            color="text.secondary"
                          >
                            {summoner.summonerName}
                          </Typography>
                        ))}
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Team 2
                        </Typography>
                        {team2.map((summoner) => (
                          <Typography
                            key={summoner.puuid}
                            variant="body2"
                            color="text.secondary"
                          >
                            {summoner.summonerName}
                          </Typography>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
                </Grid>
                {/* <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SumMatchList;
