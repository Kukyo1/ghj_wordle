import React from 'react'

export default function Modal({turns, isCorrect, word}) {
  return (
    <div className='modal'>
        {isCorrect && <div>
            <h2>You win</h2>
            <p>You found a solution in {turns} turns</p>
        </div>
        }
        {!isCorrect && <div>
            <h2>Better luck next time</h2>
            <p>The solution was <span>{word}</span></p>
            </div>}
    </div>
  )
}
