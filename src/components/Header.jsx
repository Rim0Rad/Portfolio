import NavButton from './NavButton.jsx'
import { useState } from 'react'


export default function Header(){

    const [ theme, setTheme ] = useState("mainTheme.css");
    const themes = ["mainTheme.css", "emeraldGreenTheme.css"]
    
    function getNextTheme(){
      const currentIndex = themes.indexOf(theme);
      return currentIndex === (themes.length - 1) ? themes[0]: themes[currentIndex + 1];
    }
  
    function handleClick () {
      const styleSheet = document.getElementById('style')
      const style = styleSheet.getAttribute("href");
      const newTheme = getNextTheme()
      styleSheet.setAttribute("href", style.replace(/\w+.css$/, newTheme ))
      setTheme(newTheme);
    }



    return (
        <section id="nav">
            {/* <button id="themebt" onClick={handleClick}>{theme}</button> */}
            <NavButton id="projectsBT" title={'Projects'} path='projects'/>
            <NavButton id="skillsBT" title={'Skills'} path='skills'/>
            <NavButton id="homeBT" title={'Home'} path='home'/>
            <NavButton id="aboutBT" title={'About'} path='aboutme'/>
            <NavButton id="contactBT" title={'Contacts'} path='contacts'/>
        </section>
    )
}