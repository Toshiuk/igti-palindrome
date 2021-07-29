import React, { useState } from "react";
import "./App.css";
import { animated, useSpring } from "react-spring";

const App = () => {
  const [word, setWord] = useState("");

  const isPalindrome =
    word === word.toLowerCase().replace(" ").split("").reverse().join("");

  const { x } = useSpring({
    from: { x: 0 },
    x: isPalindrome ? 1 : 0,
    config: { duration: 1000 },
  });

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
        <animated.div
          style={{
            marginTop: "20px",
            fontSize: "2em",
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        >
          {isPalindrome ? "Yes it is!" : "No it's not :c"}
        </animated.div>
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
