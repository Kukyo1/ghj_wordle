import React from 'react'

export default function Row({guess, current}) {

    if(guess){
        return(
            <div className='row past'>
                {guess.map((l, i)=>(
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }
    if(current){
        let letters = current.split('');
        return(
            <div className='row curr'>
                {letters.map((l, i)=>(
                    <div key={i} className='filled'>{l}</div>
                ))}
                {[...Array(5-letters.length)].map((_, i)=>(
                    <div key={i}></div>
                ))}
            </div>
            
        )
    }
  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
