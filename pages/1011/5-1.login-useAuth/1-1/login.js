import React, { useState, useContext } from 'react'
import Link from 'next/link'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>會員登入頁</h1>
      <hr />
      <p>目前會員登入狀態: 已登入 </p>
      {/* a連結會導致頁面重新刷新，讓狀態全都恢復到預設值 */}
      <a href="/user/profile">連至 個人資料頁(a標記)</a>
      <br />
      {/* Link元件一樣會渲染為a連結，但頁面不會重新刷新，讓狀態在不同頁面切換時可以繼續保持 用context機制要小心 */}
      <Link href="/profile">連至 個人資料頁(Link元件)</Link>
      <hr />
      <input type="text" placeholder="帳號" />
      <br />
      <input type="text" placeholder="密碼" />
      <br />
      <button onClick={() => {}}>登入</button>
      <button onClick={() => {}}>登出</button>
    </>
  )
}
