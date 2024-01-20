"use client";
import {React, useState, useEffect} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'
import Link from 'next/link';

import At from "@/../public/at.svg"
import Copy from "@/../public/copy.svg"
import Check from "@/../public/check.svg"
import Email from "@/../public/email.svg"
import At_dark from "@/../public/at_dark.svg"
import Copy_dark from "@/../public/copy_dark.svg"
import Check_dark from "@/../public/check_dark.svg"
import Email_dark from "@/../public/email_dark.svg"
import LinkedinImg from "@/../public/linkedin.png"
import InstagramImg from "@/../public/instagram.webp"
import ItchioImg from "@/../public/itchio.png"
import GithubImg from "@/../public/github.png"


import styles from './social.module.scss'

import textsFiles from "./texts.json"

function Social() {
    const [copied, setCopied] = useState(false);
    const {isDarkMode, userLang} = useTheme();
    const [texts, setTexts] = useState(textsFiles.español)

    useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang])

    const handleCopy = (e) =>{
      navigator.clipboard.writeText("gustavo.keymetlian@outlook.com");
      setCopied(true);
      
      setTimeout(() => {
        setCopied(false)
      }, 1500);
    }

  return (
    <section className={`${styles.social} ${isDarkMode ? styles.dark : styles.light} offScreen`}>
        <div className={`${styles.flex}`}>
            <h2>{texts.title}</h2>
            <Image src={isDarkMode ? At : At_dark} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.socials}`}>
            <Link target='_blank' href="https://www.linkedin.com/in/gustavo-keymetlian/" className={`${styles.socialButton}`}>
              <Image src={LinkedinImg} alt="React image" width={25} height={25} />
              LinkedIn
            </Link>
            <Link  target='_blank' href="https://www.instagram.com/tavo_ke/" className={`${styles.socialButton}`}>
              <Image src={InstagramImg} alt="React image" width={25} height={25} />
              Instagram
            </Link>
            <Link  target='_blank' href="https://kustaa-uy.itch.io" className={`${styles.socialButton}`}>
              <Image src={ItchioImg} alt="React image" width={25} height={25} />
              itch.io
            </Link>
            <Link  target='_blank' href="https://github.com/guskpo20" className={`${styles.socialButton}`}>
              <Image src={GithubImg} alt="React image" width={25} height={25} />
              Github
            </Link>
        </div>
        <div className={`${styles.flex} ${styles.email}`}>
            <h2>Email</h2>
            <Image src={isDarkMode ? Email : Email_dark} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.flex} ${styles.sendEmail}`}>
          <Link className={`${styles.sendEmail_Link}`} href="mailto: gustavo.keymetlian@outlook.com">gustavo.keymetlian@outlook.com</Link>
          <Image onClick={(e) => handleCopy(e)} src={ copied ? isDarkMode ? Chekc_dark : Check : isDarkMode ? Copy : Copy_dark} alt="Book image" width={30} height={30} />
        </div>
    </section>
  )
}

export default Social
