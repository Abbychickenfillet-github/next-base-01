import { useState } from 'react';

function CounterUI() {
  // 初始化 count 狀態
  const [count, setCount] = useState(0);

  // 當按鈕被點擊時，呼叫此函數來更新 count
  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Counter 範例</h1>
      {/* 顯示目前的 count */}
      <p>當前數字: {count}</p>
      {/* 按鈕，點擊後增加數字 */}
      <button onClick={handleClick}>點擊增加</button>
    </div>
  );
}

export default CounterUI;
