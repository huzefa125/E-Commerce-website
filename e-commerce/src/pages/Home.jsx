import React from 'react'
import Hero from '../components/Hero'
import LastestComponents from '../components/LatestComponents'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
function Home() {
  return (
    <div>
    <Hero />
    <LastestComponents></LastestComponents>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetter/>
    </div>
  )
}

export default Home
