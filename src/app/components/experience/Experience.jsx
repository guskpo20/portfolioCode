"use client";
import {React, useEffect, useState} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'

import work from "@/../public/work.svg"
import work_dark from "@/../public/work_dark.svg"
import styles from './experience.module.scss'

import textsFiles from "./texts.json"

function Experience() {
    const {isDarkMode, userLang} = useTheme();
    const [texts, setTexts] = useState(textsFiles.español)

    useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang])

  return (
    <section className={`${styles.experiences} ${isDarkMode ? styles.dark : styles.light} offScreen`}>
        <div className={`${styles.flex}`}>
            <h2>{texts.title}</h2>
            <Image src={isDarkMode ? work_dark : work} alt="work image" width={30} height={30} />
        </div>
        <div className={`${styles.experience}`}>
            <p>{texts.jobs[0].job}</p>
            <span className={`${styles.greyText}`}>{texts.jobs[0].dates}</span>
            <ul>
                <li>{texts.jobs[0].description[0]}</li>
                <li>{texts.jobs[0].description[1]}</li>
                <li>{texts.jobs[0].description[2]}</li>
            </ul>
        </div>
        <div className={`${styles.separator}`}>

        </div>
        <div className={`${styles.experience}`}>
            <p>{texts.jobs[1].job}</p>
            <span className={`${styles.greyText}`}>{texts.jobs[1].dates}</span>
            <ul>
                <li>{texts.jobs[1].description[0]}</li>
                <li>{texts.jobs[1].description[1]}</li>
                <li>{texts.jobs[1].description[2]}</li>
            </ul>
        </div>
    </section>
  )
}

export default Experience
