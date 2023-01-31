import React, { useState } from "react";

function Hoc() {
  return (
    <>
      <h2>Higher order components page</h2>
      <Hoc1 counter={Counter} />
      <Hoc2 counter={Counter} />
    </>
  );
}
function Hoc1(props) {
  return (
    <>
      <h3>
        HOC1
        <props.counter />
      </h3>
    </>
  );
}
function Hoc2(props) {
  return (
    <>
      <h3>
        HOC 2
        <props.counter />
      </h3>
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default Hoc;
