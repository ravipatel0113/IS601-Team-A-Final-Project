import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import blogStyles from '../../styles/blog.module.css';
import Date from '../../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
    return (
        <>
        <Head>
          <title>Blog</title>
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
        <section>
        <h1 className= {blogStyles.h1}>Blog</h1>
          {allPostsData.map(({ id, date, title }) => (
            <div  className= {blogStyles.BlogSep} key={id}>
              <Link  className= {blogStyles.BlogTitle} href={`/posts/${id}`}>{title}</Link>
              <br />
                <small className={blogStyles.lightText}>
                    Published On: <Date dateString={date} />
                </small>
            </div>
          ))}
        </section>
    </>
    );
  }