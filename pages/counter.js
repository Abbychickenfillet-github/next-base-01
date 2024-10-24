import React, { useState, useEffect } from 'react'

export default function Counter(props) {
  const [total, setTotal] = useState(99)
    // setTotal設定狀態的方法跟函式，就沒有querySelector
  return (
    <>
      <h1>計數器counter</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        
        // React裡面的人造事件都是on開頭的 相對於addEventListener
      }}>+1</button>

      

    </>
  )
}
