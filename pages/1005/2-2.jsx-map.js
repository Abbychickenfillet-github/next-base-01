import React, { useState, useEffect } from 'react'

export default function JsxMap(props) {
  const styles = {
    foo: {
      color: 'red',
    },
  }
  const a1 = [1, 4, 9, 16]
  const a2 = a1.map((v, i) => {
    // a2相當於
    // [<li key="0">1</li>,
    // <li key="1">4</li>,
    // <li key="2">9</li>,
    // <li key="3">16</li>]
    return <li key={i}>{v * 2}</li>
    // map一定要return
  })
  console.log(a2)
  return (
    <>
      <h1>JSX中陣列map渲染範例</h1>
      <ul>{a2}</ul>
      {/* 實作上因為map是陣列呼叫，所以直接在jsx上呼叫即可 */}
      {/* 這邊要問的是「直接在jsx上呼叫即可」jsx是from line還是從return之後起算？ */}
      {/* 範圍：這種使用範圍從 return 開始，因為只有在 return 的內容內部，JSX 才會被解析和渲染。 */}
      <ul>
        {a1.map((v, i) => {
          return <li key={i}>{v * 2}</li>
        })}
      </ul>
    </>
  )
}
