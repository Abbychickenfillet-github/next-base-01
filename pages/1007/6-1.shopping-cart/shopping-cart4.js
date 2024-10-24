import { useState } from 'react'
// 加入購物車
// 單純是商品列表，準備要加入購物使用的範例
const productList = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 33,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 100,
  },
]

export default function ShoppingCart() {
  // 一開始購物車是空的
  const [products, setProducts] = useState([])

  // 處理遞增
  const handleIncrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 這裡判斷id值是否等於productId，如果是就count屬性遞增
      if (v.id === productId) {
        return { ...v, count: v.count + 1 }
      } else {
        return v
      }
    })

    setProducts(nextProducts)
  }

  // 處理遞減
  const handleDecrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 這裡判斷id值是否等於productId，如果是就count屬性遞減
      if (v.id === productId) {
        return { ...v, count: v.count - 1 }
      } else {
        return v
      }
    })

    setProducts(nextProducts)
  }

  // 處理刪除
  const handleRemove = (productId) => {
    const nextProducts = products.filter((v) => {
      return v.id !== productId
    })
    setProducts(nextProducts)
  }

  // https://zh-hant.react.dev/learn/updating-arrays-in-state#challenges
  // react官方解答
  function handleDecreaseClick(productId) {
    // 一定要用let，因為下面有作重覆指定
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })
    // 在設定到狀態前，再作一次過濾(filter)，只保留商品數量大於0的項目
    // 相當於"刪除掉 商品數量<=0 的項目"
    nextProducts = nextProducts.filter((p) => p.count > 0)

    // 如果準備要設定到狀態的nextProducts的陣列成員數量，少於目前的products陣列成員數量，代表有要作刪除的動作
    if (products.length > nextProducts.length) {
      if (confirm('你確定要刪除此商品嗎?')) {
        // 設定到狀態
        setProducts(nextProducts)
      }
    } else {
      // 設定到狀態(一般遞減情況)
      setProducts(nextProducts)
    }
  }

  //處理加入購物車(傳入參數product代表要加入的新商品項目)
  const handleAdd = (product) => {
    // 判斷此商品是否已經在購物車中
    const foundIndex = products.findIndex((v) => v.id === product.id)

    if (foundIndex !== -1) {
      // 有找到 ===> 遞增
      handleIncrease(product.id)
    } else {
      // 否則 ===> 加入新的項目
      // 加入到購物車的商品物件，需要擴充一個count數量屬性
      const newItem = { ...product, count: 1 }
      const nextProducts = [newItem, ...products]
      setProducts(nextProducts)
    }
  }

  return (
    <>
      <h2>商品列表</h2>
      <ul>
        {productList.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name}(NT${v.price})
              <button
                onClick={() => {
                  handleAdd(v)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
      <hr />
      <h2>購物車</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (NT${product.price}) (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncrease(product.id)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 預先計算，如果按下後是遞減時，商品的數量(count屬性)會是多少
                const nextCount = product.count - 1
                //如果按了後商品數量為0，則進行刪除
                if (nextCount === 0) {
                  if (confirm('你確定要刪除此商品嗎?')) {
                    handleRemove(product.id)
                  }
                } else {
                  handleDecrease(product.id)
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                // react官網解答
                handleDecreaseClick(product.id)
              }}
            >
              –(官網)
            </button>
            <button
              onClick={() => {
                if (confirm('你確定要刪除此商品嗎?')) {
                  handleRemove(product.id)
                }
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
