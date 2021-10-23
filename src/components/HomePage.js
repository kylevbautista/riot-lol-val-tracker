import React from "react";
import { useState } from "react";
import TextInput from "./TextInput";
import ManageResults from "./ManageResults";

function HomePage() {
  return (
    <div className="bg-dark text-white">
      <ManageResults />
    </div>
  );
}

export default HomePage;
