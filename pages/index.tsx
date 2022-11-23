import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.jpg';
import facebookLogo from '../public/square-facebook.svg';
import instagramLogo from '../public/square-instagram.svg';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flint Style Soccer</title>
        <meta name="description" content="Introducing Flint kids to the game of soccer since 2016" />
        <meta name="keywords" content="Flint, soccer, youth soccer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Image alt='Flint Style Soccer logo' className={`${styles.img} ${styles.logo}`} src={logo} />

        <h1 className={styles.title}>
          Flint Style Soccer
        </h1>
        <p className={styles.description}>Founded in 2016, our mission is to introduce Flint kids to the game of soccer.</p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/people/Flint-Style-Soccer/100082905683740/">
            <Image alt="Facebook logo" className={styles.img} height={32} width={32} src={facebookLogo} />
          </a>
          <a href="https://www.instagram.com/flintstylesoccer/">
            <Image alt="Instagram logo" className={styles.img} height={32} width={32} src={instagramLogo} />
          </a>
        </div>
        &copy; 2022 Flint Style Soccer
      </footer>
    </div>
  )
}
