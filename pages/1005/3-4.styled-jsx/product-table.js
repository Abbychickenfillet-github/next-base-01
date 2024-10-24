// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'

export default function ProductTable() {
  console.log(products)

  return (
    <>
      {/* 用物件存取屬性值的方式存取要套用的樣式內容 */}
      <table className="myTable">
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
                    className='border-radius'
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <style jsx>
        {`
          .myTable {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          .myTable td,
          .myTable th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          .myTable tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          .myTable tr:hover {
            background-color: #ddd;
          }

          .myTable th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04aa6d;
            color: white;
          }
        `}
      </style>
    </>
  )
}
