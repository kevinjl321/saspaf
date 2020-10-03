import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImage"
import Footer from "components/footers/FiveColumnWithInputForm"
import Stats from "components/features/TwoColSingleFeatureWithStats2";
import About from "components/features/ThreeColWithSideImageWithPrimaryBackground"
import Upcoming from "components/features/VerticalWithAlternateImageAndText";

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <About />
      <Stats />
      <Upcoming />
      <Footer />
    </AnimationRevealPage>
  )
}

export default App