import React from "react";

// components
import { Zoom, ButtonBase } from "@mui/material";
import WaitLeaderBoard from "../common/WaitLeaderBoard";

function ValLeaderBoard({ data, valLeaderBoards, handleClick }) {
  return (
    <div className="col-10 col-md-6">
      {data.error ? (
        <p>Error Loading LeaderBoard</p>
      ) : (
        <p>Valorant LeaderBoard</p>
      )}
      <div
        className="container"
        style={{
          height: "225px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {Object.keys(valLeaderBoards).length > 0 ? (
          valLeaderBoards.players.map((agent, index) => (
            <Zoom key={index} in={true} style={{ transitionDelay: "250ms" }}>
              <div
                className="row p-2 mb-1 rounded"
                style={{
                  backgroundColor: "#222222",
                  boxShadow: "0 1px 6px 1px black",
                }}
              >
                <div className="col-2 border-end">{index + 1}</div>
                <div className="col-7">
                  <ButtonBase onClick={handleClick} value={agent.gameName}>
                    {agent.gameName}
                  </ButtonBase>
                </div>
                <div className="col-3 border-start">
                  {agent.rankedRating} rr
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

export default ValLeaderBoard;
