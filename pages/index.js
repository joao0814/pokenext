import Image from 'next/image'
import styles from '../styles/HomePage.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página home</title>
        <meta name='keywords' content='web development, programming' />
        <meta name='description' content='This is a web development portfolio' />
      </Head>
      <div className={styles.home}>
        <h1>Hello World</h1>
        <Image src="/images/city.jpg" width={400} height={500} alt='city in the night' />
      </div>
    </>
  )
}
