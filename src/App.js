import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import "./App.css"
import lol from './images/lol.webp'

function App() {
  const allPhotos = [lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol, lol]
  const [profilo, setProfilo] = useState(null)

  useEffect(() => {
    setProfilo((prevState) => prevState = lol)
  }, [])
  return (
    <>
      <NavBar profile={profilo} />
      <Gallery list={allPhotos} />
    </>
  );
}

export default App