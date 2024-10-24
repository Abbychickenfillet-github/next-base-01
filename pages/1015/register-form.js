import { useState } from 'react'

export default function RegisterForm() {
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '111',
    email: '222@test.com',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: '', // 錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    // 若欄位是 checkbox，使用 checked 狀態，否則使用 value
    if(e.target.name === 'agree'){
      nextUser={...user,agree:e.target.checked}
    }
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表單自動提交
    // 簡單驗證
    // 表單檢查--start--
    // 1.建立一個全新的錯誤訊息用物件
    const newErrors={
      name:'',
      email:'',
      username:'',
      password:"",
      confirmPassword:"",
      agree:"",
    }
    // 2.開始做個欄位的表單檢查，如果有錯誤訊息就加到newErrors
    if(!user.name){
      newErrors.name="姓名為必填"
    }
    if(!user.email){
      newErrors.email="Email為必填"
    }
    if(!user.agree){
      newErrors.agree="請先同意會員註冊條款"
    }
    if(!user.confirmPassword){
      newErrors.confirmPassword="確認密碼為必填"
    }
    if(user.password!==user.confirmPassword){
      newErrors.password="密碼與確認密碼需要相同";
    }
    if (user.password !== user.confirmPassword) {
      setErrors({ ...errors, confirmPassword: '密碼不匹配' });
    } else {
      // 處理表單提交邏輯，例如發送資料到伺服器
      console.log('表單資料:', user);
    }
    // 表單檢查--end--
    // 3.呈現錯誤訊息
    setErrors(newErrors)
    const hasErrors=Object.values(newErrors).some((v)=>v)
    // some有值(錯誤訊息)的話會是true, 如果是空字串會是falsy
    // 有錯誤，部送到伺服器，跳出此函式
    if(hasErrors){
      return
    }
    alert("送到伺服器")
  };
  

  return (
    <>
      <h1>註冊表單</h1>
      <form onSubmit={handleSubmit}>
        <label>
          姓名: <input type="text" name="name" value={user.name} required onChange={handleFieldChange} />
        </label>
        <br />
        <span className="error">{errors.name}</span>
        <br />
        <label>
          Email: <input type="email" name="email" value={user.email} required onChange={handleFieldChange}/>
        </label>
        <br />
        <span className="error">{errors.email}</span>
        <br />
        <label>
          帳號: <input type="text" name="username" value={user.username} />
        </label>
        <br />
        <span className="error">{errors.username}</span>
        <br />
        <label>
          密碼:{' '}
          <input
            type={showPassword ? 'text' : 'password' }
            name="password"
            minLength={6}
            maxLength={12}
            value={user.password}
          />
        </label>
        <input type="checkbox" checked={showPassword} onChange={(e) => {}} />{' '}
        顯示密碼
        <br />
        <span className="error">{errors.password}</span>
        <br />
        <label>
          確認密碼:{' '}
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleFieldChange}
          />
        </label>
        <input
          type="checkbox"
          checked={showConfirmPassword}
          onChange={(e) => {
            setShowConfirmPassword(!showConfirmPassword)
          }}
        />{' '}
        {/* return不寫相當於undefined這個技巧是可以少寫一些花括號 */}
        顯示密碼
        <br />
        <span className="error">{errors.confirmPassword}</span>
        <br />
        <label>
          <input type="checkbox" name="agree" checked={user.agree} onChange={handleFieldChange} /> 我同意網站會員註冊條款
        </label>
        <br />
        <span className="error">{errors.agree}</span>
        <br />
        {/* 在表單(form)中加入button，記得寫type是哪一種，預設不寫是submit */}
        <button type="submit">註冊</button>
        <button type="button" onClick={() => {}}>
          重置
        </button>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 12px;
            height: 16px;
          }
        `}
      </style>
    </>
  )
}
