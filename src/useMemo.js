import React, { useState, useMemo } from "react";

//자주 필요한 값을 초기에 캐싱하고 그 값이 필요할때마다 캐시에서 꺼내서 사용
/*
const value = useMemo(() => {
  return func();
}, [])
*/

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999; i++) {
    // 생각하는 시간
  }
  return number + 10000;
};
const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

export default function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  return (
    <div className="App">
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <hr />
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}
