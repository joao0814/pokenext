import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>hello world</h1>
      <p>This is the home page</p>
      <ul>
        <li>
          <Link href="../products">Produtos</Link>
        </li>
        <li>
          <Link href="../about">Sobre</Link>
        </li>
      </ul>
    </div >
  )
}
