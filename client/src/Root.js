import React, { useState } from "react";

export default ({ name }) => {
  const [response, setResponse] = useState("N/A");

  return (
    <>
      <h1>Hello World</h1>
      <h2>My name is {name} </h2>
      <h3>Response from backend: {response}</h3>
      <button
        onClick={() => {
          fetch("http://localhost:3000/api/test")
            .then(response => response.json())
            .then(({ data }) => setResponse(data));
        }}
      >
        fetch response
      </button>
    </>
  );
};