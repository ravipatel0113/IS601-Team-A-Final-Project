import blogStyles from '../../styles/blog.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
}


export default function Post({ postData }) {
    return (
        <>
            <Head>
            <title>{postData.title}</title>
            </Head>
            <div className= {blogStyles.container}>
                <article>
                    <h1>{postData.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}