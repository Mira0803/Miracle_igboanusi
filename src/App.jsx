import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"  
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Foooter from "./components/Footer"

export default function App() {

  return (
    <>
      <div className="pt-15">
        <NavBar/>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Foooter />
      </div>
    </>
  )
}

