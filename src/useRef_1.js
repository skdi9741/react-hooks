import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  //Ref는 하나의 Object
  //countRef.current 로 콘솔 출력 가능

  console.log("🤞렌더링...");

  const increaseCountState = () => {
    //state는 값이 변경 시 렌더링이 일어남
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    //ref는 값이 변경되도 렌더링이 일어나지 않음
    countRef.current = countRef.current + 1;
  };

  return (
    <div className="App">
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}