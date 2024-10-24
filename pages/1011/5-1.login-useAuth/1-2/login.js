import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

export default function Login() {
  // 使用從context傳入的值
  const { auth, login, logout } = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>會員登入頁</h1>
      <hr />
      <p>目前會員登入狀態: {auth.isAuth ? '已登入' : '未登入'} </p>
      {/* a連結會導致頁面重新刷新，讓狀態全都恢復到預設值 */}
      <a href="/user/profile">連至 個人資料頁(a標記)</a>
      <br />
      {/* Link元件一樣會渲染為a連結，但頁面不會重新刷新，讓狀態在不同頁面切換時可以繼續保持 */}
      <Link href="/profile">連至 個人資料頁(Link元件)</Link>
      <hr />
      <input
        type="text"
        placeholder="帳號"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <br />
      <input
        type="text"
        placeholder="密碼"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          login(username, password)
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          logout()
        }}
      >
        登出
      </button>
    </>
  )
}
