import React,{useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Counter from './components/Counter';
import Features from './components/Features';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <Clients/>
        <About />
        <Counter />
        <Features />
        <Team />
        <Portfolio />
        <Pricing />
        <Blog />
        <Testimonials />
        <Faqs />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
