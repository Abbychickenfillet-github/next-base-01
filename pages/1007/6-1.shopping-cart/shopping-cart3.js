import { useState } from 'react'
// 數量為0移除
const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

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

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
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
        </li>
      ))}
    </ul>
  )
}
