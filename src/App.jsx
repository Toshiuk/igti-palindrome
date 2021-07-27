import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [word, setWord] = useState("");

  const isPalindrome =
    word === word.toLowerCase().replace(" ").split("").reverse().join("");
  return (
    <div className={`App ${isPalindrome ? "isPalindrome" : "isNotPalindrome"}`}>
      <div>
        <h1>Is this word a palindrome?</h1>
        <input
          name="word"
          autofocus="autofocus"
          onfocus="this.select()"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
      </div>
      <div className="credits">
        <p>
          *Blue background when it is a palindrome, red background when it's not{" "}
          <br />
          *The word is case insensitive and whitespace is ignored
        </p>
        <p>Igti: Flávio Toshiuk Hirahata Jr.</p>
      </div>
    </div>
  );
};

export default App;
