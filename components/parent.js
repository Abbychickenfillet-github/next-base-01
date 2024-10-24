import React, { useState, useEffect } from 'react'
import Child from './child'

export default function Parent(props) {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 建立P到C關係，由"誰render誰"決定。父母元件渲染子女元件 */}
      {/* 父母元件可以利用類似HTML給定屬性值的方式 傳遞各種值到子女元件中 */}
      <Child price={true} isConnected="123" />
    </>
  )
}