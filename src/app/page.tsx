"use client"
import React, { useEffect } from 'react'
import Presentation from "./components/presentation/Presentation"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Knowledge from "./components/knowledge/Knowledge"
import Social from "./components/social/Social"

import { useTheme } from '@/context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'


function Home() {

  const { isDarkMode, toggleTheme} = useTheme();

  
  const checkBoxes = () => {
    let content = document.querySelectorAll(".offScreen")
    const triggerBottom = window.innerHeight / 5 * 4;

    content.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if(boxTop <= triggerBottom){
        box.classList.add("show")
      }else{
        box.classList.remove("show")
      }
    })
  }

  useEffect(() => {
    checkBoxes();
    // Agregar event listener al montar el componente
    window.addEventListener('scroll', checkBoxes);

    // Quitar event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <div className='father'>
      <button aria-label='Toggle Dark Mode' className='toggleButon' onClick={toggleTheme}>
        {isDarkMode ? (
          <MoonIcon className='icon' />
        ):(
          <SunIcon className='icon' />
        )}
      </button>
      <Presentation />
      <Experience />
      <Projects />
      <Knowledge />
      <Social />
    </div>
  )
}

export default Home
