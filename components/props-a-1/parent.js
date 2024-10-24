import React, { useState, useEffect } from 'react'
import Child from './child'

export default function Parents(props) {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      <Child />
    </>
  )
}
