import React, { useState, useEffect, createContext, useContext } from 'react'

// 1. 建立(與導出)Context
// 傳入參數為defaultValue，是在套用context時錯誤或失敗才會得到的值。
// 可以使用有意義的預設值，或使用null(通常目的是為了除錯)
const AuthContext = createContext(null)
// 可以設定displayName，這是搭配react devtools開發時用的
AuthContext.displayName = 'AuthContext'

// 2. 建立Provider(供應者)元件
// 使用有開頭/結尾的特殊元件，共用狀態在其中進行集中管理
// 提供在MyApp(_app.js)階層最上層元件中套用的context
// props.children指的是包裹在其中的所有子女元件
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    // 代表會員是否有登入的布林值
    isAuth: false,
    // 會員的資料物件
    userData: {
      id: 0,
      name: '',
      email: '',
      username: '',
    },
  })

  const login = (username, password) => {
    if (username === 'herry' && password === '12345') {
      setAuth({
        isAuth: true,
        userData: {
          id: 1,
          name: 'herry',
          email: 'herry@test.com',
          username: username,
        },
      })

      alert('歡迎')
    } else {
      alert('帳號密碼錯誤，無法登入!')
    }
  }

  const logout = () => {
    // 設定回原本的初始值
    setAuth({
      isAuth: false,
      userData: {
        id: 0,
        name: '',
        email: '',
        username: '',
      },
    })
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱勾子
// 提高閱讀性(專屬名稱)，簡化使用context的程式語法
export const useAuth = () => useContext(AuthContext)


// 3. 如果按照原本的做法名稱上都是useContext假如說我們在專案有很多useContext所以用useAuth閱讀性會比較高
// 建立一個包裝useContext的專用名稱鉤子
// 可以提高閱讀性
// children是一種未確定型態的資料結構有可能是很多子元件、表達式、什麼都沒有。React裡面有api可以操作跟處理他們。通常要開發東西的會是因為需要使用特殊的元件(大專大概用不上)
// 如果會寫js dot文件的話可以寫清楚裡面有什麼
// return後不能斷行 用小括弧可以斷行return(