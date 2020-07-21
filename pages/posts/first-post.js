import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
      <>
        <Head>
          <title>Fist Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href='/'>
            <a>BACK TO HOME</a>
          </Link>
        </h2>
      </>
    )
}
