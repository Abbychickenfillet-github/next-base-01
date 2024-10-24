// 又稱為網址路徑命名法
import React, { useState, useEffect } from 'react'

export default function JsxRender(props) {
  return (
    <>
      <h1>JSX中各種值的render(渲染)呈現</h1>
      {/* 在頁面上要對應這個結果的話呢 */}
      <div>jsx-render</div>
      <div title="number">
        <h2>number(數字)</h2>
        {123}
        <br />
        {1 - 1}
        <br />

        {NaN}
      </div>
      <div title="string">
        <h2>string(字串)</h2>
        hello
        <br />
        {''}
        <br />
        {'這個效果跟上面一樣 hello'}
        <br />
        {`price=${100 - 1}`}
      </div>
      <div title="boolean">
        <h2>boolean(布林)</h2>
        <h3>布林值不會渲染</h3>
        {/* 這邊不會渲染 */}
        {true}
        {'有布林'}
        {false}
        {'以上有一個false，代表False不會渲染'}
      </div>
      <div title="null/undefined"></div>
      <h2>null/undefined</h2>
      <h3>null跟undefined不會渲染</h3>
      {null}
      {undefined}
      <div title="array">
        <h2>array(陣列)</h2>
        <h3>React陣列的特別之處，會把所有的都黏在一起。</h3>
        {/* 近似array.join("") */}
        {[1, 2, 3]}
        <br />
        {['hello', 'a', 'b']}
        <h3>這裡的陣列中括號 會把他們join</h3>
        {/* {([<p key="545">a</p>], [<p key="2b">b</p>])}這是寫錯的。供自己警醒自己 */}
        {[<p key="1">a</p>, <p key="2">b</p>]}
        {/* 表示jsx可直接丟在陣列內 會要求對 */}
        <h3>list其實就是指陣列，key值是內部身分證的意思</h3>
      </div>
      <div title="object">
        <h2>object(物件)</h2>
        {/* {{a:1,b:2}} */}
        {/* <h3>如果不小心把物件放在渲染的位置就會出現，Error: Objects are not valid as a React child (found: object with keys {a, b}). If you meant to render a collection of children, use an array instead.物件不能渲染</h3> */}
        {/* 不能直接渲染，會造成執行錯誤，不是合法的React Child */}
        {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      </div>
      <div title="function">
        <h2>function(函式)</h2>
        {() => {}}
        {/* 函式型元件有其他的寫法所以這邊才會出錯 但不會直接有錯誤會出現在console視窗*/}
        {/* 不會渲染呈現，會有警告，不是合法的React Child */}
        {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
        <h4>參考: https://github.com/orgs/mfee-react/discussions/91</h4>
        {/* {() => {}} */}
      </div>
      <h2>真正的陣列 join 用法</h2>
      <h3>這邊好像是我問ChatGPT的</h3>
      {/* 使用 join(", ") 明確分隔元素 */}
      {[1, 2, 3].join(', ')}
      <br />
      {/* 使用 join(" - ") 將字串用 - 分隔 */}
      {['hello', 'a', 'b'].join(' - ')}
    </>
  )
}
