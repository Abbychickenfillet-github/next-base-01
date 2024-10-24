// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'
// 導入css modules檔案(命名一定要是xxxx.module.css或xxx.module.scss)，導入後styles會是一個物件值
import styles from '@/styles/product-table-2.module.css'

export default function ProductTable() {
//   console.log(products)
  console.log(styles);

  return (
    <>
      {/* 用物件存取屬性值的方式存取要套用的樣式內容 */}
      <table className={styles.myTable}>
      {/* <table className="my-table"> */}
      {/* 因為我們有裝css module的套件它會去幫我們找裡面的名字 */}
      {/* 也有陣列的寫法 */}
      {/*物件取值的時候沒有辦法用烤肉串命名法 <table className={styles['my-table']}></table> 所以建議風格，如果是用module.css會建議用小駝峰命名法，接下來去product-table.module.css文件中將my-table被myTable取代，代表只有到這個元件時才會被套用*/}
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
