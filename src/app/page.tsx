import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import fotoPerfil from "@/../public/fotoPerfil.png"
import downloadImg from "@/../public/download.svg"
import styles from './page.module.scss'


function Home() {
  return (
    <section className={`${styles.presentation}`}>
      <Image src={fotoPerfil} width={350} height={350} alt={"fotoGustavo"} className={`${styles.profilePhoto}`}/>
      <div>
        <h1 className={`${styles.name}`}>Gustavo Keymetlian</h1>
        <p className={`${styles.description}`}>Apasionado por el desarrollo y el gaming</p>
        <a className={`${styles.downloadSection}`} href={"@/../public/GustavoKeymetlian.pdf"} download>Descargar CV <Image src={downloadImg} width={15} height={15} alt="download image"/></a>
      </div>
    </section>
  )
}

export default Home
