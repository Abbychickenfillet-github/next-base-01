import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/variable.scss'
// 全域(global css)及全站會影響到的css(scss)都只有這裡可以導入
// import '@/styles/product-table.css'
// src/index.js 或 src/App.js
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// 包含 Popper.js


import { AuthProvider } from '@/hooks/use-auth2'
import { CartProvider } from '@/hooks/use-cart.js'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  // 他會透過authprovider這個元件會直接在2段那裏bypass
  // 使用自訂在頁面層級的版面(layout)
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <AuthProvider>
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </AuthProvider>
  )
}
