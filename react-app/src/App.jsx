import Header from "./components/Header";
import Hero from "./components/Hero";
import FocusAreas from "./components/FocusAreas";
import Teaching from "./components/Teaching";
import Thesis from "./components/Thesis";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FocusAreas />
      <Teaching />
      <Thesis />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
