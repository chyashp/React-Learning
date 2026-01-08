import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  // function addValue() {
  //   setCounter((counter) => (counter < 20 ? counter + 1 : counter)),
  //     console.log("clicked", counter);
  // }

  // how react fiber sends the changes in batches

  function addValue() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function removeValue() {
    setCounter((counter) => (counter > 0 ? counter - 1 : counter));
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
