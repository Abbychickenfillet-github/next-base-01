import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/LoginForm.module.sass'
/* eslint-disable */
// import styles from '@/styles/LoginForm.module.scss'
import validator from 'validator'
// 代替使用者去做聚焦的操作，所以被偵測到SEO會扣分。在新的網站中比較沒有提供這個功能。
export default function Signin(props) {
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '111',
    email: '@gmail.com',
    username: '',
    pwd: '',
    confirmPwd: '',
    gender: '',
    agree: false, // checkbox 同意會員註冊條款
  })
  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    pwd: '',
    confirmPwd: '',
    agree: '', // 錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target
    // 若欄位是 checkbox，使用 checked 狀態，否則使用 value
    if (e.target.name === 'agree') {
      nextUser = { ...user, agree: e.target.checked }
    }
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // 阻止表單自動提交
    // 簡單驗證
    // 表單檢查--start--
    // 1.建立一個全新的錯誤訊息用物件
    const newErrors = {
      name: '',
      email: '',
      username: '',
      pd: '',
      confirmPwd: '',
      agree: '',
    }
    // 2.開始做個欄位的表單檢查，如果有錯誤訊息就加到newErrors
    if (!user.name) {
      newErrors.name = '姓名為必填'
    }
    if (!user.email) {
      newErrors.email = 'Email為必填'
    }
    if (!user.agree) {
      newErrors.agree = '請先同意會員註冊條款'
    }
    if (!user.confirmPwd) {
      newErrors.confirmPwd = '確認密碼為必填'
    }
    if (user.pwd !== user.confirmPwd) {
      newErrors.password = '密碼與確認密碼需要相同'
    }
    if (user.pwd !== user.confirmPwd) {
      setErrors({ ...errors, confirmPwd: '密碼不匹配' })
    } else {
      // 處理表單提交邏輯，例如發送資料到伺服器
      console.log('表單資料:', user)
    }
    // 表單檢查--end--
    // 3.呈現錯誤訊息
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some((v) => v)
    // some有值(錯誤訊息)的話會是true, 如果是空字串會是falsy
    // 有錯誤，部送到伺服器，跳出此函式
    if (hasErrors) {
      return
    }
    alert('送到伺服器')
  }

  return (
    <>
      <div className={styles['gradient-bg']}>
        <div className="container">
          {/* <div className={`${styles.blur} ${styles.white}`}>blur</div> */}
          <div className="row d-flex justify-content-center align-items-center gx-5">
            <div className={`${styles.left} col-4`}>
              <h4 className={`${styles.white} ${styles.welcome}`}>
                Welcome to
              </h4>
              <br />
              <h3 className={`${styles.white} ${styles['guru-laptop']}`}>
                GURU Laptop
              </h3>
            </div>
            <div className={`${styles.right} col-sm-12 col-md-4`}>
              <div className={`${styles.tabs} d-flex justify-content-between`}>
                <h5 className={`${styles.white} ${styles.hover}`}>Log in</h5>
                <h5 className={styles.white}>|</h5>
                <h5 className={`${styles.white} ${styles.hover}`}>Sign up</h5>
              </div>
              <div className="justify-content-center align-items-center">
                <form className="mt-5" onSubmit={handleSubmit}>
                  <div className={styles['inputs-group']}>
                    <span className="error">{errors.email}</span>
                    <label htmlFor="email" className={styles.white}>
                      帳號(信箱)
                    </label>
                    <input
                      type="email"
                      className={`${styles['custom-input']} form-control ${styles.inputs}`}
                      name="email"
                      value={user.email}
                      onChange={handleFieldChange}
                      autofocus
                    />
                    <span className="error">{errors.pwd}</span>
                    <label
                      htmlFor="pwd"
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                    >
                      密碼
                    </label>
                    <input
                      name="pwd"
                      id="inputPassword"
                      className={`form-control ${styles['custom-input']} ${styles.inputs}`}
                      type={showPassword ? 'text' : 'password'}
                      minLength={6}
                      maxLength={12}
                      value={user.password}
                    />
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={(e) => {}}
                    />{' '}
                    <p className={styles.white}>顯示密碼</p>
                    <span className="error">{errors.confirmPwd}</span>
                    <br />
                    <label
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                      htmlFor="ConfirmPwd"
                    >
                      重新輸入密碼:{' '}
                    </label>
                    <input
                      className={`form-control ${styles['custom-input']} ${styles.inputs}`}
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="Confirmpwd"
                      value={user.confirmPwd}
                      onChange={handleFieldChange}
                    />
                    <input
                      type="checkbox"
                      checked={showConfirmPassword}
                      onChange={(e) => {
                        setShowConfirmPassword(!showConfirmPassword)
                      }}
                    />{' '}
                    <p className={styles.white}>顯示密碼</p>
                    <label
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                      htmlFor="phone"
                    >
                      手機
                    </label>
                    <input
                      className={`form-control ${styles['custom-input']} ${styles.inputs}`}
                      type="text"
                      name="phone"
                    />
                    <label
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                      htmlFor="birthDate"
                    >
                      生日
                    </label>
                    <input
                      className={`form-control ${styles['custom-input']} ${styles.inputs}`}
                      type="date"
                      name="birthDate"
                    />
                    <label
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                      htmlFor="gender"
                    >
                      性別
                    </label>
                    <br />
                    <select
                      name="gender"
                      className={`${styles['custom-input']} ${styles.inputs}`}
                      id
                    >
                      <option value="女" selected>
                        請選擇
                      </option>
                      <option value="女">女</option>
                      <option value="男">男</option>
                      <option value="不透漏">不透漏</option>
                      <option value="+LGBTQ">+LGBTQ</option>
                    </select>
                    <input
                      type="checkbox"
                      name="agree"
                      checked={user.agree}
                      onChange={handleFieldChange}
                    />{' '}
                    <p className={styles.white}>我同意網站會員註冊條款</p>
                    <span className="error">{errors.agree}</span>
                    <br />
                    <button type="submit" className="btn btn-primary">
                      送出
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .error {
            color: yellow;
            font-size: 12px;
            height: 16px;
          }
        `}
      </style>
    </>
  )
}
