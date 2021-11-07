import React from "react";
import { Zoom, Skeleton } from "@mui/material";

function WaitLeaderBoard() {
  return (
    // <div
    //   className="row p-2 mb-1 bg-dark rounded"
    //   style={{
    //     backgroundColor: "#222222",
    //     boxShadow: "0 1px 6px 1px black",
    //   }}
    // >
    //   <div className="col-3">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="sr-only"></span>
    //     </div>
    //   </div>
    //   <div className="col-9">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="sr-only"></span>
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{
          backgroundColor: "#222222",
        }}
      />
      <Skeleton
        animation="wave"
        style={{
          backgroundColor: "#222222",
        }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6, backgroundColor: "#222222" }}
      /> */}
      {/* <Skeleton
        sx={{ height: 190 }}
        animation="wave"
        variant="rectangular"
        style={{ backgroundColor: "#404040" }}
      ></Skeleton> */}
      <Zoom in={true} style={{ transitionDelay: "50ms" }}>
        <div
          className="row mb-1rounded"
          style={{
            backgroundColor: "#222222",
            boxShadow: "0 1px 6px 1px black",
          }}
        >
          <div className="col-3">
            <Skeleton
              animation="wave"
              height={40}
              width="100%"
              style={{ marginBottom: 6, backgroundColor: "#404040" }}
            />
          </div>
          <div className="col-6">
            <Skeleton
              animation="wave"
              height={40}
              width="100%"
              style={{ marginBottom: 6, backgroundColor: "#404040" }}
            />
          </div>
          <div className="col-3">
            <Skeleton
              animation="wave"
              height={40}
              width="90%"
              style={{ marginBottom: 6, backgroundColor: "#404040" }}
            />
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default WaitLeaderBoard;
