import React, { useState, useEffect } from 'react'

export default function InputRefs(props) {
    // 1. 宣告一個ref
    // inputRef={current:null}
    const inputRef=useRef(null)
  return (
    <>
      <div>input-refs</div>
    </>
  )
}
// Refs 可以讓元件保持住，某些不需要⽤於渲染的資訊，例如 DOM 節點元件或是計時⽤ ID。 React會在背後把這個參照連結到這個屬性上
// 一旦宣告了以後inputRef會長怎樣呢?會是一個物件裡面有一個current屬性 inputRef={current:null} 對標左邊的document.querySelector(API)找不到相應元素就會回傳null,否則回傳第一個符合的元素
// 用ref寫出來的元件具有可重複利用性。ref是一個內部的屬性，用ref開發出來的這個元件依樣具有可重複利用性，但用id、class沒有可重複利用性