import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, ButtonBase } from "@mui/material";
import shib_coin from "./shib_coin.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SumInfo({ info, rank }) {
  return (
    <div className="text-white">
      <Grid container spacing={2} direction="row" color="white">
        <Grid item container xs={6}>
          <Paper
            sx={{ p: 1, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
            elevation={24}
            style={{
              backgroundColor: "#404040",
            }}
          >
            <Grid item container xs={12}>
              <Grid item container direction="column" xs={6} color="white">
                <h1>{info.name}</h1>
                <p>lvl:{info.summonerLevel}</p>
              </Grid>
              <Grid item container xs={6} color="white">
                <h4>
                  {rank.tier} {rank.rank}
                </h4>
                <p>{rank.queueType}</p>
              </Grid>
              {/* <Grid item container xs={3}>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={shib_coin} />
                </ButtonBase>
              </Grid>
              <Grid item container xs={3}>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={shib_coin} />
                </ButtonBase>
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xs={6}>
          <Paper
            sx={{ p: 1, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
            elevation={24}
            style={{
              backgroundColor: "#404040",
            }}
          >
            <Grid item container xs={12}>
              <Grid item container xs={6}>
                <ButtonBase sx={{ width: 95, height: 95 }}>
                  <Img alt="complex" src={shib_coin} />
                </ButtonBase>
              </Grid>
              <Grid item container xs={6}>
                <ButtonBase sx={{ width: 95, height: 95 }}>
                  <Img alt="complex" src={shib_coin} />
                </ButtonBase>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SumInfo;
