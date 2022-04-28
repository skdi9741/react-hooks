import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //mount 될 때만
  useEffect(() => {
    console.log("마운팅");
  }, []);

  //mount 될 때, count가 변화할때마다 실행
  useEffect(() => {
    console.log("count : ", count);
  }, [count]);

  //mount 될 때, name 변화할때마다 실행
  useEffect(() => {
    console.log("name : ", name);
  }, [name]);

  return (
    <div className="App">
      <span>count : {count}</span>
      <button onClick={handleCountUpdate}>Update</button>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>{name}</span>
    </div>
  );
}
