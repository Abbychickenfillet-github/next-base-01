import { useState, useEffect } from 'react'

export default function ImageUpload() {
  // 記錄選擇的圖檔(File物件)，初始值用null
  const [selectedImg, setSelectedImg] = useState(null)
  // 預覽圖片網址(呼叫URL.createObjectURL(file)產生的暫時網址)因為是特殊物件檔案物件跟時間物件類似，裡面有一個二進位。檔案名稱檔案大小修改時間都是他暴露出來給你看的。時間日期物件都是特殊物件，暴露出這些資訊給你看而已
  const [previewURL, setPreviewURL] = useState('')
  // 伺服器回傳訊息
  // 瀏覽器端在快取的時候會先把圖片放在他的快取資料夾會先產生特殊的暫時網址可以做在瀏覽器端的預覽。還沒有到伺服器，長得很像一個網址可以直接用網址連到圖片。
  const [message, setMessage] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    // 觸發的事件物件中得到target.files input原本的設計就是設計給多檔用，所以一次可以上傳多檔。但是在底下input標籤內要加上multiple,但背後時做也要同時接到。類似陣列的一個結構也是物件，但是可以用陣列的特性。唯一一個所以files[0]
    console.log(file)

    // file有可能會是undefined，當使用者在跳出選擇圖片時按取消
    if (file) {
      setSelectedImg(file)
      // 產生預覽網址
      //setPreviewURL(URL.createObjectURL(file))
    } else {
      setSelectedImg(null)
      //setPreviewURL('')
    }
  }

  const handleImageUpload = async () => {
    const fd = new FormData()

    // 對照伺服器要接收的檔案欄位名稱
    fd.append('avatar', selectedImg)

    // 傳送到伺服器
    const res = await fetch('http://localhost:5555/upload-avatar', {
      method: 'POST',
      body: fd,
    })
    // 獲得伺服器訊息
    const data = await res.json()

    setMessage(JSON.stringify(data))
  }

  // 當選擇圖片檔案更動時，建立預覽圖(樣式三)
  useEffect(() => {
    // 沒有選擇圖片(或取消時，回復預設值)
    if (!selectedImg) {
      setPreviewURL('')
      return
    }

    // 宣告一個objectURL是為了要讓反函式呼叫時代入
    const objectURL = URL.createObjectURL(selectedImg)
    setPreviewURL(objectURL)

    // 當元件unmount時要呼叫反函式
    return () => {
      URL.revokeObjectURL(objectURL)
    }
  }, [selectedImg])

  return (
    <>
      <h1>圖片預覽與上傳</h1>
      <hr />
      <div>
        <input type="file" onChange={handleImageChange} />
        {/* 一定是不可控的，只能用不可控的方式。因為在Html的定義他是唯獨的，不可以用一個狀態去指定他的值  onChange 可控一定要2件事情都做到表單元素必須對到某一個狀態State, 我們如果直接去改變狀態*/}
      </div>
      <div>
        <button onClick={handleImageUpload}>上傳到伺服器</button>
      </div>
      <div>伺服器回傳訊息: {message}</div>
      <div>
        預覽:
        <img src={previewURL} alt="" />
      </div>
    </>
  )
}
