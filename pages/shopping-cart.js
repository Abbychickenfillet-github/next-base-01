import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
    price: 500,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
    price: 45,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
    price: 100,
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
//   陣列平坦化是用reduce有特別的函式庫會用它來做要做的事情
  const totalQty=products.reduce((acc,v)=>acc+v.count,0)
  const totalPrice=products.reduce((acc,v)=>acc+v.count*v.price,0)
  reduce
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
          {product.name} NT:{product.price} (<b>{product.count}</b>)
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

// 這裡判斷id值是否等於productId,如果是就取把count的屬性值遞增

// 是上一個練習題的第8個，就是取代update,修改到物件裡面的值。這邊換成Number之前是字串