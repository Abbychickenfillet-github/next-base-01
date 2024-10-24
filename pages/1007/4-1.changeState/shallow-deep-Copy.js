import React, { useState } from 'react'

export default function Test(props) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Nike',
    address: {
      country: {
        city: '台北',
      },
    },
  })

  return (
    <>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>
      <button
        onClick={() => {
          const nextUser = { ...user,name: 'Iris'};
          setUser(nextUser)
          console.log(user);
        }}
      >
        Change name to Iris
      </button>
{/* <p>當你這樣寫：</p>
<pre>
  <code>
    const nextUser = { name: 'Iris', ...user };
  </code>
  </pre>
<p>JavaScript 會先放入 name: 'Iris'，然後再把 user 的屬性展開，因為展開後的 user 物件裡也有 name 屬性，它會覆蓋掉前面你指定的 name: 'Iris'，所以最後 nextUser 的 name 仍然是 Nike，並不是 Iris。</p> */}
      <button
        onClick={() => {
          // 由於狀態是深層物件，所以必需要不斷的展開物件進行淺拷貝，到最後進行修改
          // 這是不好的寫法
          // const nextUser = {
          //   ...user,
          //   address: {
          //     ...user.address,
          //     country: {
          //       ...user.address.country,
          //       city: '桃園',
          //     },
          //   },
          // }

          // 可以使用JSON.parse(JSON.stringify())進行深拷貝
          const nextUser = JSON.parse(JSON.stringify(user))
          nextUser.address.country.city = '桃園'

          setUser(nextUser)
        }}
      >
        Change city to 桃園
      </button>
    </>
  )
}
