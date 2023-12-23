import "./app.scss"
import Cursor from "./components/cursor/Cursor"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import Techs from "./components/techs/Techs"

function App() {


  return (
    <div>
    <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Technologies"><Parallax type="tech"/></section>
      <section>
        <Techs/>
      </section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio />
    </div>
  )
}

export default App
