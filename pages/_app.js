import { useEffect } from 'react'
// import '@/styles/globals.css'
// 全域(global css)及全站會影響到的css(scss)都只有這裡可以導入
// 全域(global css)只有這裡可以套用
// import '@/styles/product-table.css'
import { AuthProvider } from '@/hooks/use-auth2'
import { CartProvider } from '@/hooks/use-cart.js'
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
import 'bootstrap/dist/css/bootstrap.min.css'

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
