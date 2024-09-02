import { Toaster } from "react-hot-toast"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <div>
      <Toaster/>
      <BackToTop/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
