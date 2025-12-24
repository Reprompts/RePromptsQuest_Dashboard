import { useState } from 'react'
import styles from './App.module.css'  // ✅ Correct usage of CSS module
import { Routes, Route } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import AITools from './Components/Pages/AI-Tools/AITools'
import Tutorials from './Components/Pages/Tutorials/Tutorials'
import OpenSource from './Components/Pages/Opensource/OpenSource'
import TechNews from './Components/Pages/TechNews/TechNews'
import Login from './Components/Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import MiniReddit from './Components/Pages/minireddit/MiniReddit'
import About from './Components/Pages/FooterPages/About'
import Contact from './Components/Pages/FooterPages/Contact'
import Privacy from './Components/Pages/FooterPages/Privacy'
import Terms from './Components/Pages/FooterPages/Terms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className={styles.routePage}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<AITools />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/tech-news" element={<TechNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/anti-karma" element={<MiniReddit />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
