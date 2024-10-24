// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'
import styles from '@/styles/product-table.module.css'
// 導入後styles會是一個物件值
export default function ProductTable() {
  // console.log(data)
  console.log(products)
  // css module的情況下最好用小駝峰
  return (
    <>
      {/* 如果css的module要帶變數帶樣式 */}
      <table className={styles.myTable}>
        {/* 變成說css module檔只有到這個元件才會引入 */}
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return (
              <tr key={product.id}>
                <td> {product.id}</td>
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
                <td>{product.name}</td>
              </tr>
            )
          })}
        </tbody>
        {/* // handouts > image  */}
      </table>
  
    </>
  )
}
