import { useState } from 'react'
// 處理數量遞增減
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
              handleDecrease(product.id)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
