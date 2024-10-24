import React, { useState, useEffect } from 'react'

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
          const nextUser = { ...user,name: 'Iris' }
          setUser(nextUser)
        }}
      >
        Change name to Iris
      </button>
      <button
        onClick={() => {
          // 由於狀態是深層物件，所以必需要不斷的展開物件進行淺拷貝，到最後進行修改

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
