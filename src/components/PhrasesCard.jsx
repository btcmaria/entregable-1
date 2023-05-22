import React from 'react'

const PhrasesCard = ({ phraseRandom }) => {

  return (
    <p className='card'>{phraseRandom.phrase}</p>
  )
}

export default PhrasesCard