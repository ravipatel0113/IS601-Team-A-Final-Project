import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import blogStyles from '../../styles/blog.module.css';

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
        </Head>
        <section>
        <h1 className= {blogStyles.h1}>Blog</h1>
          {allPostsData.map(({ id, date, title }) => (
            <div  className= {blogStyles.BlogSep} key={id}>
              <Link  className= {blogStyles.BlogTitle} href={`/posts/${id}`}>{title}</Link>
              <br />
            </div>
          ))}
        </section>
    </>
    );
  }