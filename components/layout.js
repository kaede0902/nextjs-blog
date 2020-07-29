import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'kaede0902';
export const siteTitle = 'Next.js Sample Website'


export default function Layout ({ children, home }) {
  return ( 
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico">
      </Head>
      {children}
    </div> 
  )
}
