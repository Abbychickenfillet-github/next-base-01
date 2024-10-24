import React, { useState, useEffect } from 'react'

export default function Counter2(props) {
    const [total,setTotal]=useState(99)
    // setTotal設定狀態的方法跟函式，就沒有querySelector

    // useEffect(()=>{},[]) 這個作用的定義是當這個元件初次渲染的時候執行這個程式碼，用這個可以保證我們虛擬dom轉成真實dom的時候
    // 直接呼叫裡面有兩個傳入參數 1.callback function 2. array 程式碼寫在第一個箭頭函式裡面。null無法加入事件監聽
    useEffect(()=>{
        document.querySelector("#add").addEventListener("click",function(){
            document.querySelector("#total").innerText=
            Number(document.querySelector("#total").innerText)+1
        })
    },[])
  return (
    <>
      <h1>計數器counter</h1>
      <h1>{total}</h1>
      <button id="add" onClick={()=>{
        setTotal(total+1)

        // React裡面的人造事件都是on開頭的 相對於addEventListener
      }}>+1</button>
      <h2></h2>
      <h3></h3>
      <h4></h4>
      

    </>
  )
}
