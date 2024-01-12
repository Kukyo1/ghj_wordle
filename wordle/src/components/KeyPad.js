import React, { useEffect, useState } from 'react'

export default function KeyPad({usedLetters}) {
    const [letters, setLetters] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:3001/letters')
        .then(res=>res.json())
        .then(data=>{
            setLetters(data);
        })
    }, [])
  return (
    <div className='container'>
        <div className='KeyPad'>
            {letters && letters.map((l)=>{
                let color = usedLetters[l.key];
                return <div key={l.key} className={color}>{l.key}</div>
            })}
        </div>
    </div>

  )
}
