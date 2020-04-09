import React, { useState, useRef } from 'react';

import { add } from './calculations/add.rs';

function App() {
  const [sum, setSum] = useState(0);
  const firstRef = useRef();
  const secondRef = useRef();

  const getRefValue = (ref) => ref?.current?.value ?? 0;

  return (
    <>
      <h1>Welcome to rusty react</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSum(add(getRefValue(firstRef), getRefValue(secondRef)));
        }}
      >
        <input type="number" name="first" ref={firstRef} />
        <input type="number" name="second" ref={secondRef} />
        <button type="submit">Sum</button>
      </form>
      <pre>{sum}</pre>
      <p>This is build using parcel.js</p>
    </>
  );
}

export default App;
