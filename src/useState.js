import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ["홍길동", "김길동"];
};

export default function App() {
  const [names, setNames] = useState(() => {
    //Callback 형태로 불러오면 렌더링 시 1회만 실행
    return heavyWork();
  });
  const [input, setInput] = useState("");
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = () => {
    setNames((prevState) => {
      //prevState는 이전값을 가지고있음
      return [input, ...prevState];
    });
  };
  return (
    <div className="App">
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onClick}>업로드</button>
      {names.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
    </div>
  );
}