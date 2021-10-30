import React from "react";

function SumInfo({ info }) {
  return (
    <div class="text-white">
      {Object.keys(info).length > 0 ? (
        <div>
          <h1>Summoner Name : {info.name}</h1>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default SumInfo;
