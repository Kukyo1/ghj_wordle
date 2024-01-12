import React from 'react'
import Row from './Row'

export default function Grid({guesses, current, turn}) {
  return (
    <div className='grid'>
        {guesses.map((g, i)=>{
            if(turn === i){
                return <Row key={i} current={current}></Row>
            }
            return <Row key={i} guess={g}></Row>
        })}
    </div>
  )
}
