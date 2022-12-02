import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  <>
  <Header />
  <main classname = 'container'>
    <Component {...pageProps} />
  </main>
  </>
}

export default MyApp
