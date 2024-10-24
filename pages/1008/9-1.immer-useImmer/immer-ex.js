import React, { useState, useEffect } from 'react'
import { produce } from 'immer'
import { useImmer } from 'use-immer'

export default function ImmerEx(props) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Nike',
    address: {
      country: {
        city: '台北',
      },
    },
  })

  // 用useImmer來取代useState
  const [user2, setUser2] = useImmer({
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
      <h1>Immer應用範例</h1>
      <h2>useImmer修改方式</h2>
      <p>姓名: {user2.name}</p>
      <p>城市: {user2.address.country.city}</p>
      <button
        onClick={() => {
          // useImmer裡面就有produce的功能，直接在設定狀態的方法裡加入處理draft的回調函式
          setUser2((draft) => {
            draft.name = 'Iris'
          })
        }}
      >
        修改姓名為 Iris
      </button>
      <button
        onClick={() => {
          setUser2((draft) => {
            draft.address.country.city = '桃園'
          })
        }}
      >
        修改城市為 桃園
      </button>
      <hr />
      <h2>Immer修改方式</h2>
      <p>姓名: {user.name}</p>
      <p>城市: {user.address.country.city}</p>
      <button
        onClick={() => {
          // draft是草稿(代理)狀態，相當於複本可以直接處理狀態
          const nextUser = produce(user, (draft) => {
            draft.name = 'Iris'
          })

          setUser(nextUser)
        }}
      >
        修改姓名為 Iris
      </button>
      <button
        onClick={() => {
          const nextUser = produce(user, (draft) => {
            draft.address.country.city = '桃園'
          })

          setUser(nextUser)
        }}
      >
        修改城市為 桃園
      </button>
      <hr />
      <h2>基本狀態修改方式</h2>
      <p>姓名: {user.name}</p>
      <p>城市: {user.address.country.city}</p>
      <button
        onClick={() => {
          const nextUser = { ...user, name: 'Iris' }
          setUser(nextUser)
        }}
      >
        修改姓名為 Iris
      </button>
      <button
        onClick={() => {
          // 物件巢狀階層過深，進行深拷貝
          const nextUser = JSON.parse(JSON.stringify(user))
          // 在複本上修改
          nextUser.address.country.city = '桃園'
          setUser(nextUser)
        }}
      >
        修改城市為 桃園
      </button>
    </>
  )
}
