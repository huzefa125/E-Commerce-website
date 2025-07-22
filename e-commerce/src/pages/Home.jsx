import React from 'react'
import Hero from '../components/Hero'
import LastestComponents from '../components/LatestComponents'
import BestSeller from '../components/BestSeller'
function Home() {
  return (
    <div>
    <Hero />
    <LastestComponents></LastestComponents>
    <BestSeller/>
    </div>
  )
}

export default Home
