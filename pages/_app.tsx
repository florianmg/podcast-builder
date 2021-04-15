import Navbar from '../components/Navbar.component'
import Layout from '../components/Layout.component'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
