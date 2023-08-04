import Head from 'next/head';

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
            
          </>
        )}
      </header>
      <main>{children}</main>
    </>
  );
}