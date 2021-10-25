import React from "react";

function SumMatchList({ matches }) {
  return (
    <div>
      Match List
      {/* {matches.length > 0 ? (
        <div>
          {matches.map((match) => (
            <div key={match}>{match}</div>
          ))}
        </div>
      ) : (
        <div>No Match data</div>
      )} */}
      <p>{matches[0]}</p>
    </div>
  );
}

export default SumMatchList;
