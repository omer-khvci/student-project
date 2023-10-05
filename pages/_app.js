import '@/styles/globals.css';
import Head from 'next/head';
import Layout from './layout';

const App = (props) => {
  const { Component, pageProps } = props;

  const GetLayout = () => {
    if (Component.Layout == null) {
      return <Layout>
        <Component {...pageProps} />
      </Layout>
    } else {
      return <Component {...pageProps} />
    }
  }

  return (
    <>
      <Head>
        <title>{`Deneme`}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <div>

        {GetLayout()}
      </div>
    </>
  )
}
export default App;
