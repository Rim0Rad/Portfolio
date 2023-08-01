import { useState } from 'react'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'


export default function App () {
  

  return (
    <section id="webPage" style={{height: window.innerHeight}}>
      <Header/>
      <Body/>
    </section>
  )
}

