import './App.css'
import Header from './components/header'
import logo from './assets/meme-logo.png'
import banner from './assets/hero-section.jpg'
import Hero from './components/hero-section'
import Slider from './components/slider'


function App() {
  

  return (
    <>
    
      <Header logo={logo}/>
      <Hero banner={banner}/> 
      <Slider/> 
      
    </>
  )
}

export default App
