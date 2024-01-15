"use client";
import {React, useEffect, useState} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'

import fotoPerfil from "@/../public/fotoPerfil.png"
import downloadImg from "@/../public/download.svg"
import dev from "@/../public/dev.svg"
import styles from './presentation.module.scss'

import textsFiles from "./texts.json"

function Presentation() {
    const {isDarkMode, userLang} = useTheme();
    const [texts, setTexts] = useState(textsFiles.español)

    useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang])
    
  return (
    <>
    <section className={`${styles.presentation} ${isDarkMode ? styles.dark : styles.light}`}>
      <div>
        <Image src={fotoPerfil} width={350} height={350} alt={"fotoGustavo"} className={`${styles.profilePhoto}`}/>
        <div>
          <h1 className={`${styles.name}`}>Gustavo Keymetlian</h1>
          <p className={`${styles.description}`}>{texts.description}</p>
          <div className={`${styles.flex}`}>
          <Image src={dev} width={35} height={35} alt="download image"/>
          <a className={`${styles.downloadSection} ${ userLang == "en" ? styles.english : "" }`} href={ userLang == "en" ? "/GustavoKeymetlianEnglish.pdf" : "/GustavoKeymetlian.pdf"} download>{texts.download}<Image src={downloadImg} width={15} height={15} alt="download image"/></a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Presentation
