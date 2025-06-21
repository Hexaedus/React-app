import { useState } from "react";
import "./App.css";

function InputSubmit() {
  const [inputValue, setInputValue] = useState("");

  const logVal = () => {
    console.log(inputValue);
  }

  return (
    <div className="input-submit">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Submit logVal={logVal} />
    </div>
  );
}

function Input({inputValue, setInputValue}) {
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

function Submit({logVal}) {
  return (
    <button type="submit" className="submit-button" onClick={logVal}>
      Submit
    </button>
  );
}

export default InputSubmit;
