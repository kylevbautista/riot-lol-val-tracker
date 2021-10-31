/**
 * Presentational Component used for any Text Input
 * Takes in onChange prop
 */
import React from "react";

function TextInput({ onChange, value }) {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name="placeholder"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}

export default TextInput;
