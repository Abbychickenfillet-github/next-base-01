import React, { useState, useEffect } from 'react'
import Star from '@/components/star'

export default function StarTest() {
  return (
    <>
      <h1>星星評分元件測試頁面</h1>
      <hr />
      <h2>預設屬性組(對照組)</h2>
      <Star />
      <hr />
      <h2>測試組</h2>
      <Star initValue={7} max={6} />
      <hr />
      <Star initValue={6} max={10} />
    </>
  )
}
