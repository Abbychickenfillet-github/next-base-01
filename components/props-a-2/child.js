import React, { useState, useEffect } from 'react'

// 子女元件可以從函式的傳入參數中，得到父母元件傳遞過來的屬值
// props(屬性)必定是一個物件，包含了所有傳遞過來的資料
export default function Child(props) {
  console.log(props)

  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title={props.title}</p>
      <p>price={props.price}</p>
      <p>isConnected={JSON.stringify(props.isConnected)}</p>
      <p>aa={JSON.stringify(props.aa)}</p>
      <p>oa={JSON.stringify(props.oa)}</p>
      <p>sum(1,2)={props.sum(1, 2)}</p>
    </>
  )
}
