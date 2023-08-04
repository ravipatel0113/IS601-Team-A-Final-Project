import Head from 'next/head';
import Header from './header';


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta
          name="description"
        />
        <meta name="og:title" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            
          </>
        ) : (
          <>
            <Header />
          </>
        )}
      </header>
      <main>{children}</main>
    </>
  );
}