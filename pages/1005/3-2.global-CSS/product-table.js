// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'
// __app.js渲染的className
// 全站樣式是沒有. 或# 的那種。是標籤這是老師所謂的全域樣式只有一支檔案可以引入全域樣式就是_app.js
export default function ProductTable() {
  console.log(products)

  return (
    <>
      <table className="my-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* product是每個商品的物件值 */}
          {products.map((product, i) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  {/* 使用next提供的進階圖片元件，必需要加height與width */}
                  <Image
                    width={150}
                    height={100}
                    alt=""
                    src={`/pics/${product.photos.split(',')[0]}`}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
