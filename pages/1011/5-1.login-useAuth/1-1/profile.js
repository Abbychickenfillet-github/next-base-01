import React, { useState, useContext } from 'react'
import Link from 'next/link'

export default function Profile() {
  

  return (
    <>
      <h1>會員個人資料頁</h1>
      <hr />
      <Link href="">連至 個人資料頁(Link元件)</Link>
      <hr />
      <p>帳號:</p>
      <p>姓名:</p>
      <p>Email:</p>
    </>
  )
}