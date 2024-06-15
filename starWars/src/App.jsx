import { useState } from 'react'
import Main from './components/Main'
import './App.css'
import StarshipsList from './components/StarshipList'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  )
}

export default App
