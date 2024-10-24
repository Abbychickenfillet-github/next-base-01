import React, { useState, useEffect } from 'react'
import Star from '@/components/star'
// 需要先安裝 `npm i react-icons`
import { FaHeart, FaStar } from 'react-icons/fa'

export default function StarTest() {
  const [r1, setR1] = useState(4)
  const [r2, setR2] = useState(3)

  return (
    <>
      <h1>星星評分元件測試頁面</h1>
      <hr />
      <h2>預設屬性組(對照組)</h2>
      <Star />
      <hr />
      <h2>測試組</h2>
      <Star
        initValue={r1}
        max={6}
        onRatingClick={setR1}
        fillColor="red"
        emptyColor="pink"
        icon={<FaHeart />}
      />
      <button
        onClick={() => {
          setR1(0)
        }}
      >
        重設為0
      </button>
      <p>r1={r1}</p>
      <hr />
      <Star
        initValue={r2}
        max={10}
        onRatingClick={setR2}
        fillColor="#ff6600"
        emptyColor="#ccc"
        icon={<FaStar />}
      />
      <p>r2={r2}</p>
    </>
  )
}
