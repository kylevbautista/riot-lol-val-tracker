import React from "react";

function WaitLeaderBoard() {
  return (
    <div
      className="row p-2 mb-1 bg-dark rounded"
      style={{
        backgroundColor: "#222222",
        boxShadow: "0 1px 6px 1px black",
      }}
    >
      <div className="col-3">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
      <div className="col-9">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
}

export default WaitLeaderBoard;
