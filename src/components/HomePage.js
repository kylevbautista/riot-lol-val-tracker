import React from "react";
import ManageResults from "./leagueResults/ManageResults";

function HomePage() {
  return (
    <div className="bg-dark text-white">
      Riot Games Player Tracker
      <ManageResults />
    </div>
  );
}

export default HomePage;
