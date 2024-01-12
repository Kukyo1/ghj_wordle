import { useState } from "react";

const useWordle = (word) => {
    const [turn, setTurns] = useState(0);
    const [current, setCurrent] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedLetters, setUsedLetters] = useState({});

    //Function which formatting a guess
    const formatGuess  = ()=>{
        let wordArr = [...word];
        let formatWord = [...current].map((l)=>{
            return {key: l, color: 'gray'}
        })

        formatWord.forEach((l, i)=>{
            if(l.key === wordArr[i]){
                l.color = 'green';
                wordArr[i] = null;
            }
        })

        formatWord.forEach((l)=>{
            if(l.color !== 'green' && wordArr.includes(l.key)){
                l.color = 'yellow';
                wordArr[wordArr.indexOf(l.key)] = null;
            }
        })
        return formatWord;
    }
    //Function which add a new guess
    const addNewGuess = (formatted)=>{
        if(current===word){
            setIsCorrect(true);
        }
        setGuesses((prev)=>{
            let newGuess = [...prev];
            newGuess[turn] = formatted;
            return newGuess;
        })
        setHistory((prev)=>{
            return [...prev, current];
        })
        setTurns((prev)=>prev+1);
        setUsedLetters((prev)=>{
            let newLetters = {...prev}

            formatted.forEach((l)=>{
                let CC = newLetters[l.key];
                if(l.color === 'green'){
                    newLetters[l.key] = 'green';
                    return;
                }
                if(CC !== 'green' && l.color === 'yellow'){
                    newLetters[l.key] = 'yellow';
                    return;
                }
                if(CC !== 'green' && CC !== 'yellow' && l.color === 'gray'){
                    newLetters[l.key] = 'gray';
                    return;
                }
            })
            return newLetters;
        })
        setCurrent('');
    }
    //Function which listen key press
    const handleKeyUp = ({key})=>{

        if(key === 'Enter'){
            if(current.length !==5){
                console.log('Word must be 5 chars');
                return;
            }
            if(turn>5){
                console.log('You use all turns');
                return;
            }
            if(history.includes(current)){
                console.log('You already tried this word');
                return;
            }
            const formatted = formatGuess();
            addNewGuess(formatted);
        }

        if(key === 'Backspace'){
            setCurrent(prev=>{
                return prev.slice(0, -1);
            });
        }
        if(/^[А-Яа-я]$/.test(key)){
            if(current.length<5){
                setCurrent(prev =>prev+key);
            }
        }
    }

    return {turn, current, guesses, isCorrect, handleKeyUp, usedLetters}
}
 
export default useWordle;