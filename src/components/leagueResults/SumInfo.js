import React from "react";

function SumInfo({ info, rank }) {
  return (
    <div className="text-white">
      <div>
        <h1>Summoner Name : {info.name}</h1>
        <h4>
          Rank: {rank.tier} {rank.rank}
        </h4>
      </div>
    </div>
  );
}

export default SumInfo;
