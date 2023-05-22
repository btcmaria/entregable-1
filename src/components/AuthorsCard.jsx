import React from 'react'

const AuthorsCard = ({ phraseRandom }) => {
  return (
    <footer className='authors'>
      <div className='title__authors'>Autor:</div>
      <p className='p__authors'><b>{phraseRandom.author}</b></p>
    </footer>
  )
}

export default AuthorsCard