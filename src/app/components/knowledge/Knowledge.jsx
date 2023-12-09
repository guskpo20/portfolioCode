"use client";
import {React} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'

import Book from "@/../public/book.svg"
import ReactImg from "@/../public/react.png"
import TailwindImg from "@/../public/tailwind.png"
import ViteImg from "@/../public/vite.svg"
import LinkImg from "@/../public/link.svg"
import CSharpImg from "@/../public/cSharp.png"
import UnityImg from "@/../public/unity.png"
import VueImg from "@/../public/vue.png"
import NextImg from "@/../public/next.png"
import SalesforceImg from "@/../public/salesforce.png"
import VeevaImg from "@/../public/veeva.png"



import styles from './knowledge.module.scss'

/* import textsFiles from "./texts.json"
 */
function Knowledge() {
    const {isDarkMode, userLang} = useTheme();
    /* const [texts, setTexts] = useState(textsFiles.español) */

   /*  useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang]) */

  return (
    <section className={`${styles.knowledge} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={`${styles.flex}`}>
            <h2>Knowledge</h2>
            <Image src={Book} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.knowImgs}`}>
            <Image src={ReactImg} alt="React image" width={100} height={100} />
            <Image src={TailwindImg} alt="React image" width={100} height={100} />
            <Image src={ViteImg} alt="React image" width={100} height={100} />
            <Image src={LinkImg} alt="React image" width={100} height={100} />
            <Image src={CSharpImg} alt="React image" width={100} height={100} />
            <Image src={UnityImg} alt="React image" width={100} height={100} />
            <Image src={VueImg} alt="React image" width={100} height={100} />
            <Image src={NextImg} alt="React image" width={100} height={100} />
            <Image src={SalesforceImg} alt="React image" width={100} height={100} />
            <Image src={VeevaImg} alt="React image" width={100} height={100} />
        </div>
    </section>
  )
}

export default Knowledge
