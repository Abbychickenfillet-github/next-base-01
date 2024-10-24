import React, { useState, useEffect, use } from 'react'
import Link from 'next/link'

export default function EffectPattern(props) {
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState(0)
    // 樣式1:沒有第二傳入參數(相依變數陣列)
    // effect是一個callback類型他是一個函式,deps(dependency array)?可寫可不寫
 
    useEffect(()=>{
        // 代表 
        // 意義：每次render後都會執行一次
        console.log("樣式1(沒有第二傳入參數): 每次render後都會執行一開始渲染也算");
        // 這個樣式是做什麼？我們不太會用到它。這樣的 useEffect 在每次渲染後都會執行，這可能會造成不必要的性能開銷，特殊的鉤子會用調試/日誌目的：

// 當你需要了解每次渲染後組件的狀態，比如在開發過程中追蹤組件的變化，這樣的 useEffect 可以幫助你記錄每次渲染的情況。
// 例如：在每次渲染後記錄一些狀態或變數的值。
    })

    // 樣式2:第二個傳入參數(相依變數陣列)一值保持是空陣列
    // 用途：通常稱為didMount(掛載之後)的時間點
        // 1. 頁面呈現之後，像伺服器進行fetch/ajax獲取資料呈現在頁面上
        // 2.整合其他非React的JS應用。(虛擬DOM已經呈現在真實DOM)
    useEffect(()=>{
        // 意義：初次render後執行一次，之後不再執行
        console.log("樣式2： 初次render後執行一次，之後不再執行。");
    },[])
    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // 只在初次渲染後執行
    
    // ^^保持空白陣列，表示不予任何變數相依。會套用有加入第二傳入參數的預設行為。

    // 樣式3:第二傳入參數(相依變數陣列)裡面有值
    // DidMount + DidUpdate(當相依變數有變動後會再執行)
    // 當^^^^^^total加入到相依變數陣列中，代表類似監聽total狀態更動(change)的事件。react怎麼知道total有變?引用相等原則Object.is跟===的差異很細微只有 +0 -0不相等
    // 要確保狀態最後變動的值這邊可以幫我們作解決方案
    // 用途：1.狀態變動時異步的解決方案之一
    // 2.狀態連鎖變動- A->B->C 狀態A變動完之後要去改狀態B再去改狀態C
    // 3.產品列表相關產品要套用到現在的元件上的時候會用到這個樣式
    useEffect(()=>{
        console.log("樣式3: 初次render後執行一次，之後當total有變動後再執行一次");
    },[total])

    useEffect(()=>{
        console.log("樣式3: 初次render後執行一次，之後當total2有變動後再執行一次");
    },[total2])

    useEffect(()=>{
        console.log("樣式3: 初次render後執行一次，之後當total或total2有變動後再執行一次");
    },[total,total2])

    // 大專會用不是2就是3
    // 樣式4:第一傳入參數(作用回調函式)中的回傳值(也是一個函式)
    // 
    useEffect(()=>{
        return()=>{
            // here
            console.log("樣式4: 元件被移出真實DOM之前(BEFORE)會執行一次");
        }
    },[])
  return (
    <>
      <h1>useEffect應用4種樣式</h1>
      <Link href="/">首頁</Link>
      <h1>計數器</h1>
      <hr />
      <h1>{total}</h1>
      <button
        // onClick是react內部加入的"人造(synthetic)事件"屬性
        // 相當於由react在執行前協助進行addEventListener
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <hr />
      <button
        onClick={()=>{
            setTotal2(total2+1)
        }
    }
        >
        +1
      </button>
    
    </>
  )
}
// 按下計數器之後1、3都會重新執行
