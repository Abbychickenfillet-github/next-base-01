import { useState } from 'react'
// 因為要使用導入的圖片，只能用Image元件
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  // 擴充一個可以代表是否有被加入到收藏(我的最愛)的布林值屬性，預設值是false
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  // 宣告書籍資料的狀態
  const [books, setBooks] = useState(initState)

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>標題</th>
            <th>作者</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Image
                    src={book.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
