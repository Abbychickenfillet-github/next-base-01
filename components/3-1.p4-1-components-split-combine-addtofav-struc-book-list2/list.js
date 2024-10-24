import { useState } from 'react'
// 因為要使用導入的圖片，只能用Image元件
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

import styles from './book-list2.module.css'

export default function List() {
  // 擴充一個可以代表是否有被加入到收藏(我的最愛)的布林值屬性fav，預設值是false
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  // 宣告書籍資料的狀態
  const [books, setBooks] = useState(initState)

  // 處理切換book項目的fav屬性布林值
  const handleToggleFav = (bookIsbn) => {
    const nextBooks = books.map((v, i) => {
      // 這裡判斷isbn值是否等於bookIsbn，如果是就反相(切換)fav布林值
      if (v.isbn === bookIsbn) {
        return { ...v, fav: !v.fav }
      } else {
        return v
      }
    })

    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table className={styles.myTable}>
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
                  {/* 使用導入的圖片，只能用Image元件 */}
                  <Image
                    onClick={() => {
                      handleToggleFav(book.isbn)
                    }}
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
