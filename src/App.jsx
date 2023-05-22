import { useState } from 'react'
import './App.css'
import AuthorsCard from './components/AuthorsCard'
import ButtonCard from './components/ButtonCard'
import PhrasesCard from './components/PhrasesCard'
import phrases from "./utils/phrases.json"
import RandomElementFromArray from "./utils/randomElementFromArray"

const fondos = [5,6,7,8]

function App() {
  const initialPhrase = RandomElementFromArray(phrases)
  const initialPath = RandomElementFromArray(fondos)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  const [pathRandom, setPathRandom] = useState(initialPath )
 
  const objStyle = {
    backgroundImage: `url("/imagenes/fondo${pathRandom}.jpg")`
  }
  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>

      <ButtonCard setPhraseRandom={setPhraseRandom}
       setPathRandom={setPathRandom}
       fondos={fondos}
      />
      <PhrasesCard phraseRandom={phraseRandom}/>
      <AuthorsCard phraseRandom={phraseRandom}/>
    </div>
  )
}

export default App
 