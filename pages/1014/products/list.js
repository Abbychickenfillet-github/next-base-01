import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// 資料來源網址:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
//`/1014/products/list`

// 範例:
// [
//   {
//     "id": 1,
//     "picture": "https://via.placeholder.com/150",
//     "stock": 5,
//     "name": "iPhone 12 Pro",
//     "price": 25000,
//     "tags": "蘋果,大螢幕"
//   }
// ]
export default function List(props) {
  const [products, setProducts] = useState([])

  // 向伺服器要求資料的函式
  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products`

    // 在async-await語法中養成使用try...catch的習慣
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 檢查資料類型是否正確，維持設定到狀態中都一定是所需的陣列資料類型
      if (Array.isArray(resData)) {
        // 設定到狀態中 ==> 觸發re-render(進入update階段)
        setProducts(resData)
      } else {
        console.log('資料錯誤')
      }
    } catch (e) {
      console.log(e)
    }
  }

  // didMount(初次渲染)之後，向伺服器要求資料，觸發重新渲染(re-render)
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/1014/products/${product.id}`}>{product.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
