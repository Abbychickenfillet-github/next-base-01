import { useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

// 討論區收集整理參考:
// https://github.com/orgs/mfee-react/discussions/60
export default function Star({
  initValue = 0, // 初始評分，一開始點亮幾個星星
  max = 5, // 最多可評分數(幾個星星)
  onRatingClick = () => {},
}) {
  // 點按星星按鈕的評分，一開始是0代表沒評分
  const [rating, setRating] = useState(initValue)

  // 滑鼠游標懸停(hover)評分，一開始是0代表沒評分
  const [hoverRating, setHoverRating] = useState(0)

  // 簡單的針對傳入屬性值的檢查
  if (initValue > max) {
    console.warn('initValue 不可以超過 max 的值')
  }

  return (
    <>
      <div>
        {/* 簡易建立5個有1...N數字成員陣列的語法
         參考: https://github.com/orgs/mfee-react/discussions/50
       */}
        {Array(max)
          .fill(1)
          .map((v, i) => {
            // 每個星星按鈕的分數，相當於索引值+1
            const score = i + 1

            return (
              <button
                key={i + 1}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                  // 回送分數回父母元件
                  onRatingClick(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠游標移入設定分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠游標移入設定分數回預設值0
                  setHoverRating(0)
                }}
                className={styles.starBtn}
              >
                <span
                  // 判斷如果此星星的分數(score)小於等於目前點按評分(rating)或是游標懸停評分(hoverRating)，則套用點亮樣式(on)，否則套用無點亮樣式(off)
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}
