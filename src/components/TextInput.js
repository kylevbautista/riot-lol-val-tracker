import React from "react";

function TextInput() {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name="placeholder"
        placeholder="Search..."
      ></input>
    </div>
  );
}

export default TextInput;
