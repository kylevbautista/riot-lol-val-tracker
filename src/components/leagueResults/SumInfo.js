import React from "react";
import * as summonerApi from "../../api/summonerApi";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, ButtonBase } from "@mui/material";
import shib_coin from "./shib_coin.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SumInfo({ info, rank, exists }) {
  const [summonerRank, setSummonerRank] = useState([]);
  useEffect(() => {
    if (Object.keys(info).length > 0) {
      getSummonerRank(info.id);
    }
  }, [info]);
  const getSummonerRank = (encryptedId) => {
    summonerApi
      .getRank(encryptedId)
      .then((data) => {
        setSummonerRank(data);
        console.log("DATA", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                {summonerRank.length > 0 ? (
                  <h4>
                    {summonerRank[0].tier} {summonerRank[0].rank}
                  </h4>
                ) : (
                  <h4 style={{ color: "#9A2A2A" }}>Rank Unknown</h4>
                )}
                {summonerRank.length > 0 ? (
                  <p>{summonerRank[0].queueType}</p>
                ) : (
                  <p style={{ color: "#9A2A2A" }}>Rank Type Unknown</p>
                )}
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
