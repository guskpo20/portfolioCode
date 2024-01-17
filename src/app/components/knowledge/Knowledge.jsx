"use client";
import {React, useState, useEffect} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'

import Book from "@/../public/book.svg"
import Book_Dark from "@/../public/book_dark.svg"
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
import HtmlImg from "@/../public/html.png"
import CssImg from "@/../public/css.png"
import JsImg from "@/../public/js.png"
import TsImg from "@/../public/ts.png"
import NodeImg from "@/../public/node.png"



import styles from './knowledge.module.scss'

import textsFiles from "./texts.json"

function Knowledge() {
    const {isDarkMode, userLang} = useTheme();
    const [texts, setTexts] = useState(textsFiles.español)

    useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang])

  return (
    <section className={`${styles.knowledge} ${isDarkMode ? styles.dark : styles.light} offScreen`}>
        <div className={`${styles.flex}`}>
          <h2>{texts.title}</h2>
          <Image src={isDarkMode ? Book_Dark : Book} alt="Book image" width={30} height={30} />
        </div>
        <div className={`${styles.knowImgs}`}>
          <div>
            <Image src={HtmlImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={CssImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={JsImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={TsImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={NodeImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={ReactImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={TailwindImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={ViteImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={CSharpImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={UnityImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={VueImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={NextImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={SalesforceImg} alt="React image" width={50} height={50} />
          </div>
          <div>
            <Image src={VeevaImg} alt="React image" width={50} height={50} />
          </div>
        </div>
    </section>
  )
}

export default Knowledge
