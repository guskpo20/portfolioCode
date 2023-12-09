"use client";
import {React, useEffect, useState} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'

import work from "@/../public/work.svg"
import styles from './experience.module.scss'

/* import textsFiles from "./texts.json"
 */
function Experience() {
    const {isDarkMode, userLang} = useTheme();
    /* const [texts, setTexts] = useState(textsFiles.español) */

   /*  useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang]) */

  return (
    <section className={`${styles.experiences} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={`${styles.flex}`}>
            <h2>Experiences</h2>
            <Image src={work} alt="work image" width={30} height={30} />
        </div>
        <div className={`${styles.experience}`}>
            <p>FrontEnd Developer - Wunderman Thomspon Studios UY</p>
            <span className={`${styles.greyText}`}>Enero 2023 - Actualidad</span>
            <ul>
                <li>Desarollo de emails, clms y webs (Next.js o HTML,Css, Javascript, Jquery) a partid de archivo de diseño (haciendolos pixelperfect)</li>
                <li>Creacion de PDF reviewer, aplicacion que muestra diferencias entre dos pdfs (tool interna de la empresa)</li>
                <li>Desarrollo de Email Specsheet automation, aplicacion que muestra a partir de un email genera un pdf tecnico con toda la informacion sobre el email (tool interna de la empresa)</li>
            </ul>
        </div>
        <div className={`${styles.separator}`}>

        </div>
        <div className={`${styles.experience}`}>
            <p>Desarrollador Jr - Restaurante Chez Piñeiro</p>
            <span className={`${styles.greyText}`}>Marzo 2020 - Marzo 2021</span>
            <ul>
                <li>Operador de la base de datos (clientes)</li>
                <li>Diseño y creación del bot para WhatsApp (mandar mensajes automáticamente a números de la base de datos) usando python </li>
                <li>Operador del software</li>
            </ul>
        </div>
    </section>
  )
}

export default Experience
