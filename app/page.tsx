import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        <Image src="/img/logo.svg" alt="logo" width="78" height="44" />
        <div>
          <input placeholder='Пошук' />
          <Image src="/img/logo.svg" alt="logo" width="50" height="50" />
        </div>
        <a href="tel:+380636292336">+380636292336</a>
        <select name="language" id="language">
          <option><Image />UA</option>
          <option><Image />EN</option>
        </select>
        <button>heart</button>
        <button>cart</button>
        <button>login</button>
      </header>
    <main className={styles.main}>

      </main>
      </>
  )
}
