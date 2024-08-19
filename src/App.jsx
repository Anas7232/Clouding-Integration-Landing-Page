import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WordFlowPage from "./components/WordFlow"
import WorkFlowSecond from "./components/WorkFlowSecond"
import CEOSection from "./components/CEOSection"
import ServicesPage from "./components/ServicesPage"
import ServiceSecondPage from "./components/ServiceSecondPage"
import BlogPage from "./components/BlogPage"
import LastSection from "./components/LastSection"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-8'>
        <HeroSection />
        <FeatureSection />
      </div>
      <WordFlowPage />
      <div className='max-w-7xl mx-auto pt-20 px-8'>
        <WorkFlowSecond />
      </div>
      <CEOSection />
      <div className="max-w-7xl mx-auto pt-10 px-8">
        <ServicesPage />
      </div>
      <ServiceSecondPage />
      <div className="bg-neutral-100">
      <BlogPage />
      <LastSection />
      </div>
      <Footer />
    </>
  )
}

export default App
