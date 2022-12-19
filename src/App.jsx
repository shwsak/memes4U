import './App.css'
import { useEffect, useState } from 'react'
import logo from './assets/meme-logo.png'
import About from './components/About'
import Slider from './components/slider'
import MemeCard from './components/MemeCard'
import NavBar from './components/NavBar'


function App() {

  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    fontSize: "35",
    memeImages: "https://i.imgflip.com/3oevdk.jpg"
});


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])
  
  function handleSlider(id, url) {
    setMeme((prevMeme => ({...prevMeme, memeImages:url,}))
    )
  };


  return (
    <>
      <NavBar logo={logo}/>
      <div className='container py-5'>
        <About />
        <Slider allMemes={allMemes} handleSlider={handleSlider} />
        <MemeCard meme={meme} setMeme={setMeme} memeImages={meme.memeImages} />
      </div>


    </>
  )
}

export default App
