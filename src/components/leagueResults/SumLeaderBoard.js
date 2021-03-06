import React from "react";

// components
import { Zoom, ButtonBase, Button } from "@mui/material";
import WaitLeaderBoard from "../common/WaitLeaderBoard";

function SumLeaderBoard({ data, lolBoards, handleClick }) {
  return (
    <div className="col-10 col-md-6">
      {data.error ? (
        <p>Error Loading LeaderBoard</p>
      ) : (
        <p>League of Legends LeaderBoard</p>
      )}
      <div
        className="container"
        style={{
          height: "225px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {Object.keys(lolBoards).length > 0 ? (
          lolBoards.entries.map((summoner, index) => (
            <Zoom
              key={summoner.summonerName}
              in={true}
              style={{ transitionDelay: "250ms" }}
            >
              <div
                className="row p-2 mb-1 rounded"
                style={{
                  backgroundColor: "#222222",
                  boxShadow: "0 1px 6px 1px black",
                }}
              >
                <div className="col-2 border-end">{index + 1}</div>
                <div className="col-7">
                  <Button
                    size="small"
                    onClick={handleClick}
                    value={summoner.summonerName}
                    style={{ color: "white" }}
                    sx={{
                      ":hover": {
                        bgcolor: "#404040",
                      },
                    }}
                  >
                    {summoner.summonerName}
                  </Button>
                </div>
                <div className="col-3 border-start">
                  {summoner.leaguePoints} lp
                </div>
              </div>
            </Zoom>
          ))
        ) : (
          <>
            <WaitLeaderBoard />
            <WaitLeaderBoard />
            <WaitLeaderBoard />
            <WaitLeaderBoard />
            <WaitLeaderBoard />
          </>
        )}
      </div>
    </div>
  );
}

export default SumLeaderBoard;
