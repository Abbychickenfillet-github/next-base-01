import { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  // 點按星星按鈕的評分，一開始是0代表沒評分
  const [rating, setRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 簡易建立5個有1...N數字成員陣列的語法
         參考: https://github.com/orgs/mfee-react/discussions/50
       */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星按鈕的分數，相當於索引值+1
            const score = i + 1

            return (
              <button
                key={i+ 1}
                onClick={() => {
                  setRating(score)
                }}
                className={styles.starBtn}
              >
                <span
                  // 判斷如果此星星的分數(score)小於等於目前評分(rating)，則套用點亮樣式(on)，否則套用無點亮樣式(off)
                  className={score <= rating ? styles.on : styles.off}
                >
                  &#9733;
                  {/* 特殊字元 星星 */}
                </span>
              </button>
            )
          })}
      </div>
      <p>你選了{rating}分</p>
    </>
  )
}
