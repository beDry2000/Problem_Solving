import React from 'react'
import { useState } from 'react';

function alternatingSums(inputArray) {
    const arr = inputArray.map(number => +number);
    const teamTotal = arr.reduce((total, weight) => total + weight);
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    const team1 = newArr.reduce((total, weight) => total + weight);
    const team2 = teamTotal - team1;

    return { team1, team2, teamTotal }
}

const A2 = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = () => {
        const arr = input.split(",");
        const result = alternatingSums(arr);
        setResult(result)
    }
    return (
        <>
            <input onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Find biggest product</button>

            <p> Can nang team 1 - {result.team1}</p>
            <p> Can nang team 2 - {result.team2}</p>
        </>
    )
}

export default A2