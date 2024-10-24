# 完整購物車範例

> 本範例有使用[react-icons](https://react-icons.github.io/react-icons/)，請先安裝

1. 請依照 demo 圖片中完成同頁的購物車功能

2. context練習: 分開兩個頁面分別呈現商品與購物車

3. context練習: 加入網頁右上角的購物車圖示，與呈現目前加入的商品數量 Badge 徽章，點按後連入購物車

4. 加入各種訊息對話盒，例如"xxx商品已加入購物車中"或"xxx商品已在購物車中移除"(可使用[react-hot-toast](https://react-hot-toast.com/)或[sweetalert2-react-content](https://github.com/sweetalert2/sweetalert2-react-content))

註: 先安裝套件

```sh
npm i react-hot-toast sweetalert2 sweetalert2-react-content
```

5. 在拆分出的導覽列元件(Navbar)上，實作有兩個連結選單"購物車"與"商品列表"的選單列，以及選單項目點亮的功能

6. 在Local Storage中記錄購物車的購買項目內容，以及能夠同步化購物車的購買項目(重新整理or重開網頁時恢復)