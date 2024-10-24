import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// 子女元件可以從函式的傳入參數中，得到父母元件傳遞過來的屬值
// props(屬性)必定是一個物件，包含了所有傳遞過來的資料
// 在傳入參數中直接使用物件解構語法，提取每個物件中的屬性名稱為變數名
// !! 注意: 一定要加花括號`{}`，才是物件解構語法
// ? 目的1: 減少使用 `prop.xxx`的語法，讓程式碼更簡潔提高閱讀性與方便使用
// ? 目的2: 再進階使用函式傳入參數預設值的語法，來定義每個屬性值的預設值
export default function Child({
  title = '', // 預設屬性用
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
    </>
  )
}

// 在元件外面區域，設定屬性的限制類型或是必填
Child.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isConnected: PropTypes.bool.isRequired,
}
