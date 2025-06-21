import { useState } from "react";
import "./App.css";

function InputSubmit() {
  return (
    <div className="input-submit">
      <Input />
      <Submit />
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
    <input
      className="text-input"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    </>
  );
}

function Submit() {
  return (
    <button type="submit" className="submit-button">
      Submit
    </button>
  );
}

export default InputSubmit;
