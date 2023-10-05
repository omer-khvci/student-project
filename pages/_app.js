import '@/styles/globals.css'
import Head from 'next/head';
import Home from '.';

const App = (props) =>{
  const {Component, pageProps} = props;

  const getLayout = Component.Layout ?? (page => <Home>{page}</Home>)

  return(
    <>
      <Head>
        <title>{`Deneme`}</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <div>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  )
}
export default App;
