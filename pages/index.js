import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        
      </Head>
       {/* introduction section */}

       <p className='introduction-paragraph'>
        Hello, my name is Matthew Norman and I am<br />
        a Full Stack Web Developer who utilizes<br />
        MongoDB, ExpressJS, ReactjS, NodeJS, and NextJS!<br />
        I use these technologies to achieve my development<br />
        goals and bring a vast number of solutions to each<br />
        and every customer. If you are interested in working<br />
        with me, please feel free to contact me using the<br />
        information provided.

       </p>
      

    </div>
  )
}
