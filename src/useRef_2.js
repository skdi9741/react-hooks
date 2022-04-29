import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    //inputRef.current.focus();
  }, []);
  const onClick = () => {
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="usename" />
      <button onClick={onClick}>확인</button>
    </div>
  );
}
