import { useState } from 'react'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'


export default function App () {


  console.log("render app")



  return (
    <section id="page">
      <Header/>
      <Body/>
    </section>
  )
}

