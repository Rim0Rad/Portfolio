import { useState } from 'react'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'


export default function App () {
  


  return (
    <section id="webPage" style={{height: window.innerHeight}}>
      <Header/>
      <Body/>
      <Footer/>
    </section>
  )
}

