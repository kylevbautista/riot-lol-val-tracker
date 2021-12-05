import React from "react";
import * as summonerApi from "../../api/summonerApi";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as apiStatusAction from "../../redux/actions/apiStatusAction";
import { bindActionCreators } from "redux";
import { styled } from "@mui/material/styles";
import { Grid, Paper, ButtonBase, Grow } from "@mui/material";
import shib_coin from "./shib_coin.png";
import { addToFollow } from "../../api/auth/followsApi";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SumInfo({ info, rank, exists, ...props }) {
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
        data.sort((a, b) => (a.leaguePoints > b.leaguePoints ? -1 : 1));
        for (let i = 0; i < data.length; i++) {
          if (data[i].queueType === "RANKED_SOLO_5x5") {
            data[i].queueType = "Ranked Solo";
          }
        }
        setSummonerRank(data);
        // console.log("DATA", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFollow = async () => {
    if (props.isLoggedIn) {
      //do something
      console.log("values", info.name);
      const res = await addToFollow({ name: info.name });
      console.log("res", res);
      if (res.status) {
        alert(res.status);
      }
      if (res.modifiedCount) {
        alert("added to follow list");
      }
    } else {
      alert("Login to Add");
    }
  };

  return (
    <div className="text-white">
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          color="white"
          style={{
            justifyContent: "center",
            // alignItems: "center",
            // justifyItems: "center",
            // alignContent: "center",
          }}
        >
          <Grid item container xs={6} md={6}>
            <Paper
              sx={{ p: 1, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
              elevation={24}
              style={{
                backgroundColor: "#404040",
              }}
            >
              <Grid item container xs={12}>
                <Grid
                  item
                  container
                  direction="column"
                  xs={12}
                  md={6}
                  color="white"
                  style={{
                    justifyContent: "center",
                    borderEnd: "1px solid",
                  }}
                >
                  <p className="h6">
                    <strong>{info.name}</strong>
                  </p>
                  <small>lvl:{info.summonerLevel}</small>
                  {summonerRank.length > 0 ? (
                    <small>
                      Win Ratio&nbsp;
                      {(
                        (summonerRank[0].wins /
                          (summonerRank[0].wins + summonerRank[0].losses)) *
                        100
                      ).toFixed()}
                      %
                    </small>
                  ) : (
                    <>LP Unknown</>
                  )}
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={6}
                  color="white"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  {summonerRank.length > 0 ? (
                    <Grid
                      item
                      container
                      xs={12}
                      color="white"
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <p className="h6">
                        <small>{summonerRank[0].queueType}</small>
                      </p>
                    </Grid>
                  ) : (
                    <Grid
                      item
                      container
                      xs={12}
                      color="white"
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "#9A2A2A" }}>Rank Type Unknown</p>
                    </Grid>
                  )}
                  {summonerRank.length > 0 ? (
                    <Grid
                      item
                      container
                      xs={12}
                      color="white"
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <p className="h6">
                        <small>
                          {summonerRank[0].tier} {summonerRank[0].rank}
                        </small>
                      </p>
                    </Grid>
                  ) : (
                    <Grid
                      item
                      container
                      xs={12}
                      color="white"
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <h4 style={{ color: "#9A2A2A" }}>Rank Unknown</h4>
                    </Grid>
                  )}
                  {/** */}
                  <Grid
                    item
                    container
                    xs={12}
                    color="white"
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    {summonerRank.length > 0 ? (
                      <small>
                        {summonerRank[0].leaguePoints} LP /{" "}
                        {summonerRank[0].wins}W {summonerRank[0].losses}L
                      </small>
                    ) : (
                      <>LP Unknown</>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item container xs={7} md={2}>
            <Paper
              sx={{ p: 1, margin: "auto", maxWidth: "100%", flexGrow: 1 }}
              elevation={24}
              style={{
                backgroundColor: "#404040",
              }}
            >
              <Grid item container xs={12}>
                <Grid
                  item
                  container
                  xs={12}
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <ButtonBase
                    onClick={handleFollow}
                    sx={{ width: "100%", height: 65 }}
                  >
                    <Img alt="complex" src={shib_coin} />
                    <div>Click to follow</div>
                  </ButtonBase>
                </Grid>
                {/* <Grid item container xs={6}>
                  <ButtonBase sx={{ width: 95, height: 95 }}>
                    <Img alt="complex" src={shib_coin} />
                  </ButtonBase>
                </Grid> */}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grow>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summoner: state.apiCallsInProgress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      apiInProgress: bindActionCreators(apiStatusAction.beginApiCall, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SumInfo);
