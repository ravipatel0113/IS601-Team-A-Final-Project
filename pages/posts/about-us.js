import Head from "next/head";
import Script from "next/script";

export default function AboutUsPost() {
    return(
        <>
        <Head>
          <title>About Us</title>
          <Script strategy='afterinteractive' 
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID_KEY}`} />
          <Script strategy='afterinteractive'
              dangerouslySetInnerHTML={{ __html : `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.G_ID_KEY}', {
                page_path: window.location.pathname,
            });`,
          }} 
          />
          <meta
            name="description"
            content="Welcome to Our Website Beans & Brews."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href='/images/siteicon.ico' />
        </Head>
        <h1>About Us</h1>
    </>
    ); 
}