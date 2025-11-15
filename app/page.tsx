'use client'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default Home
