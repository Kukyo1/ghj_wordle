import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import KeyPad from './KeyPad';
import Modal from './Modal';

export default function Wordle({word}) {

    const {current, handleKeyUp, turn, guesses, isCorrect, usedLetters} = useWordle(word);
    const [showModel, setShowModel] = useState(false);
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyUp);
        if(isCorrect){
            setTimeout(()=>{
                setShowModel(true);
            }, 2000)
            window.removeEventListener('keyup', handleKeyUp);
        }
        if(turn>5){
            setTimeout(()=>{
                setShowModel(true);
            }, 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }
        return () =>window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp, isCorrect, turn])

    useEffect(()=>{
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return(
        <div>
            <Grid guesses={guesses} current={current} turn={turn}></Grid>
            <KeyPad usedLetters={usedLetters}></KeyPad>
            {showModel && <Modal isCorrect={isCorrect} turns={turn} word={word}></Modal>}
        </div>
    )
}