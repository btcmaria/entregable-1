import React from 'react'
import getrandomElementFromArray from "../utils/randomElementFromArray"
import phrase from "../utils/phrases.json"

const ButtonCard = ({ setPhraseRandom, setPathRandom, fondos }) => {

  const handleRandomPrase = () => {
    const newRandomPhrase = getrandomElementFromArray(phrase)
    setPhraseRandom(newRandomPhrase)
    const newPath = getrandomElementFromArray(fondos)
    setPathRandom(newPath)
  }

  return (
    <button className='app__btn' onClick={handleRandomPrase}>Probar mi suerte 😶‍🌫️</button>
  )
}

export default ButtonCard