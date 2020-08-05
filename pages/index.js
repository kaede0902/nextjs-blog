import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [kaede 0902 introduction]
        </p>
        <p>
          This is a sample project
          <a href="https://nextjs.org/learn">
            Learn our Next.js tutorial
          </a>
        </p>
      </section>
    </Layout>
  )
}
