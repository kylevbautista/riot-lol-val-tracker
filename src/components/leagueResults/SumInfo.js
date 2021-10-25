import React from "react";

function SumInfo({ info }) {
  return (
    <div>
      {Object.keys(info).length > 0 ? (
        <div>
          Summoner Name : {info.name} <br></br>
          Summoner Id : {info.id} <br></br>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default SumInfo;
