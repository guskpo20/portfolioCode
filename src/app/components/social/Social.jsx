"use client";
import {React} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'
import Link from 'next/link';

import At from "@/../public/at.svg"
import Copy from "@/../public/copy.svg"
import LinkedinImg from "@/../public/linkedin.png"
import InstagramImg from "@/../public/instagram.webp"
import ItchioImg from "@/../public/itchio.png"
import GithubImg from "@/../public/github.png"
import Email from "@/../public/email.svg"


import styles from './social.module.scss'

/* import textsFiles from "./texts.json"
 */
function Social() {
    const {isDarkMode, userLang} = useTheme();
    /* const [texts, setTexts] = useState(textsFiles.español) */

   /*  useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang]) */

  return (
    <section className={`${styles.social} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={`${styles.flex}`}>
            <h2>Socials</h2>
            <Image src={At} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.socials}`}>
            <Link href="https://www.linkedin.com/in/gustavo-keymetlian/" className={`${styles.socialButton}`}>
              <Image src={LinkedinImg} alt="React image" width={25} height={25} />
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/tavo_ke/" className={`${styles.socialButton}`}>
              <Image src={InstagramImg} alt="React image" width={25} height={25} />
              Instagram
            </Link>
            <Link href="https://kustaa-uy.itch.io" className={`${styles.socialButton}`}>
              <Image src={ItchioImg} alt="React image" width={25} height={25} />
              itch.io
            </Link>
            <Link href="https://github.com/guskpo20" className={`${styles.socialButton}`}>
              <Image src={GithubImg} alt="React image" width={25} height={25} />
              Github
            </Link>
        </div>
        <div className={`${styles.flex} ${styles.email}`}>
            <h2>Email</h2>
            <Image src={Email} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.flex} ${styles.sendEmail}`}>
          <Link className={`${styles.sendEmail_Link}`} href="mailto: gustavo.keymetlian@outlook.com">gustavo.keymetlian@outlook.com</Link>
          <Image src={Copy} alt="Book image" width={30} height={30} />
        </div>
    </section>
  )
}

export default Social
