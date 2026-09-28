import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Body from './Body'
import Reaction from './Reaction'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Body />
    <Reaction/>
    <Footer />
  </StrictMode>,
)
