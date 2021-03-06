import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Articles from '../components/articles'






export async function getStaticProps() {
  const allPostsData = await fetch(`https://naald-app.herokuapp.com/articles`)
  const posts = await allPostsData.json()
  return {
    props:
    {
      data: posts
    }
  }
}


export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
          <Articles articles={data} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
