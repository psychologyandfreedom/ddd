import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head';
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
      
        {/* css only */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>

      
      <Layout>
          <Component {...pageProps} />
          {/* <!-- JavaScript Bundle with Popper --> */}
          <Script
            id='load-boostrap-javascript'
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"
          >

          </Script>
      </Layout>
    </>
  ) 
}

export default MyApp
