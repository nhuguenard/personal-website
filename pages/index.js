import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getLatestPost  } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({latestPost}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Nick Huguenard</b>. I'm a senior software consulatant at Configit, Inc. I love problem solving and learning new things.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest Blog Post</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} key={latestPost.id}>
            <Link href="/posts/$[id]" as={`/posts/${latestPost.id}`}>
              <a>{latestPost.title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={latestPost.date} />
            </small>
          </li>
        </ul>
      </section>

    </Layout>
  )
}


export async function getStaticProps() {
  const latestPost = getLatestPost();
  return {
    props: {
      latestPost
    }
  };
}