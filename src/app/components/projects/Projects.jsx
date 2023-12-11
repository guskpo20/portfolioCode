"use client";
import {React, useEffect, useState} from 'react'
import { useTheme } from '@/context/ThemeContext'

import Image from 'next/image'
import Link from 'next/link';

import list from "@/../public/list.svg"
import TaskManagerImg from "@/../public/taskManager.png"
import BudgetManager from "@/../public/budgetManager.jpg"
import Administrator from "@/../public/administrator.png"
import NeedgleGame from "@/../public/needleGame.png"
import JumpGame from "@/../public/saltos.png"
import ReactImg from "@/../public/react.png"
import TailwindImg from "@/../public/tailwind.png"
import ViteImg from "@/../public/vite.svg"
import LinkImg from "@/../public/link.svg"
import CSharpImg from "@/../public/cSharp.png"
import UnityImg from "@/../public/unity.png"




import styles from './projects.module.scss'

import textsFiles from "./texts.json"

function Projects() {
    const {isDarkMode, userLang} = useTheme();
    const [texts, setTexts] = useState(textsFiles.español)

    useEffect(() => {
      if(userLang == "en"){
        setTexts(textsFiles.english)
      }
    }, [userLang])

  return (
    <section className={`${styles.projects} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={`${styles.flex}`}>
            <h2>{texts.title}</h2>
            <Image src={list} alt="list image" width={30} height={30} />
        </div>
        <div className={`${styles.project}`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={TaskManagerImg} width={500} height={300} alt="Project Image" />
          </div>
          <div className={`${styles.gap}`}> 
            <p className={`${styles.projectTitle}`}>{texts.projects[0].title}</p>
            <div className={`${styles.greyText}`}>{texts.projects[0].description}</div>
            <div className={`${styles.techImgs}`}>
            <Image src={ReactImg} width={30} height={30} alt="React Logo" />
            <Image src={TailwindImg} width={30} height={30} alt="Tailwind Logo" />
            <Image src={ViteImg} width={30} height={30} alt="Vite Logo" />
            </div>
            <div className={`${styles.buttons}`}>
              <Link className={`${styles.button}`} target='_blank' href="https://github.com/guskpo20/react-to-do-list" >Code <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
              <Link className={`${styles.button}`} href="https://helpful-kheer-2d9093.netlify.app" target='_blank' >Live <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={BudgetManager} width={500} height={300} alt="Project Image" />
          </div>
          <div className={`${styles.gap}`}> 
            <p className={`${styles.projectTitle}`}>{texts.projects[1].title}</p>
            <div className={`${styles.greyText}`}>{texts.projects[1].description}</div>
            <div className={`${styles.techImgs}`}>
            <Image src={ReactImg} width={30} height={30} alt="React Logo" />
            <Image src={TailwindImg} width={30} height={30} alt="Tailwind Logo" />
            <Image src={ViteImg} width={30} height={30} alt="Vite Logo" />
            </div>
            <div className={`${styles.buttons}`}>
              <Link className={`${styles.button}`} target='_blank' href="https://github.com/guskpo20/budget-manager" >Code <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
              <Link className={`${styles.button}`} href="https://steady-cocada-60026f.netlify.app" target='_blank' >Live <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={Administrator} width={500} height={300} alt="Project Image" />
          </div>
          <div className={`${styles.gap}`}> 
            <p className={`${styles.projectTitle}`}>{texts.projects[2].title}</p>
            <div className={`${styles.greyText}`}>{texts.projects[2].description}</div>
            <div className={`${styles.techImgs}`}>
            <Image src={ReactImg} width={30} height={30} alt="React Logo" />
            <Image src={TailwindImg} width={30} height={30} alt="Tailwind Logo" />
            <Image src={ViteImg} width={30} height={30} alt="Vite Logo" />
            </div>
            <div className={`${styles.buttons}`}>
              <Link className={`${styles.button}`} target='_blank' href="https://github.com/guskpo20/administrador-react" >Code <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
              <Link className={`${styles.button}`} href="https://animated-quokka-9d24f3.netlify.app" target='_blank' >Live <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={JumpGame} width={500} height={300} alt="Project Image" />
          </div>
          <div className={`${styles.gap}`}> 
            <p className={`${styles.projectTitle}`}>{texts.projects[3].title}</p>
            <div className={`${styles.greyText}`}>{texts.projects[3].description}</div>
            <div className={`${styles.techImgs}`}>
            <Image src={CSharpImg} width={30} height={30} alt="C# Logo" />
            <Image src={UnityImg} width={30} height={30} alt="Tailwind Logo" />
            </div>
            <div className={`${styles.buttons}`}>
              <Link className={`${styles.button}`} href="https://kustaa-uy.itch.io/el-saltos" target='_blank' >Live <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={NeedgleGame} width={500} height={300} alt="Project Image" />
          </div>
          <div className={`${styles.gap}`}> 
            <p className={`${styles.projectTitle}`}>{texts.projects[4].title}</p>
            <div className={`${styles.greyText}`}>{texts.projects[4].description}</div>
            <div className={`${styles.techImgs}`}>
            <Image src={CSharpImg} width={30} height={30} alt="C# Logo" />
            <Image src={UnityImg} width={30} height={30} alt="Tailwind Logo" />
            </div>
            <div className={`${styles.buttons}`}>
              <Link className={`${styles.button}`} href="https://kustaa-uy.itch.io/pincha-el-circulo" target='_blank' >Live <Image src={LinkImg} width={20} height={20} alt="Link image" /></Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
