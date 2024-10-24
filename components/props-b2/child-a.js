import React, { useState, useEffect } from 'react'

export default function ChildA({ pData = '' }) {
  return (
    <>
      <h3>ChildA(子女元件)</h3>
      <p>來自Parent(父母元件)的資料: {pData}</p>
    </>
  )
}
