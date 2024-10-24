import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '@/components/loader'

// 資料來源網址:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/2

//`/1014/products/[productCode]`
// 路由: `/products/任何其它list之外` 都算
// 資料夾中的`[productCode].js`檔案，代表在這資料夾中，除了根(索引)路由(index.js)與靜態路由(有名稱的例如list.js)之外，都算這個檔案中的實作結果，例如`/product/123`
export default function Detail(props) {
  // 宣告路由器
  // 1. router.query 物件值，裡面會包含以檔案主檔名的屬性名稱，例如productCode
  // 2. router.isReady 布林值，true代表已經水合化作用(ssr)完成
  const router = useRouter()

  // 宣告商品狀態
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 載入資料的信號狀態，true 代表進入此頁一開始要進行向伺服器載入資料，呈現載入動畫
  const [loading, setLoading] = useState(true)

  // 向伺服器要求資料的函式
  const getProduct = async (productCode) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`

    // 在async-await語法中養成使用try...catch的習慣
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 檢查資料類型是否正確，維持設定到狀態中都一定是所需的物件資料類型
      if (typeof resData === 'object' && resData.id && resData.name) {
        // 設定到狀態中 ==> 觸發re-render(進入update階段)
        setProduct(resData)
        // 關閉載入指示動畫，撥放2秒
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } else {
        console.log('資料錯誤')
      }
    } catch (e) {
      console.log(e)
    }
  }

  // 用useEffect監聽router.isReady變動
  useEffect(() => {
    // 當true時代表query中可以在query中獲得動態屬性值
    if (router.isReady) {
      // 在這裡可以確保得到router.query.productCode
      getProduct(router.query.productCode)
      // console.log('router.query', router.query)
    }
    // 省略eslint檢查一行
    // eslint-disable-next-line
  }, [router.isReady])

  const display = (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      <h2>{product.name}</h2>
      <p>
        {/* eslint-disable-next-line*/}
    <img src={product.picture} alt="" />
      </p>
      <p>價格: {product.price}</p>
    </>
  )

  return <>{loading ? <Loader /> : display}</>
}
