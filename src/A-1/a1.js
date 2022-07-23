import React from 'react'
import { useState } from 'react';

function adjacentElementsProduct(inputArray) {
    const arr = inputArray.map(number => +number);
    const length = arr.length - 1;
    const newArr = [];
    for (let i = 0; i< length; i++) {
        newArr.push(arr[i] * arr[i+1])
    }
    console.log('Day so tich', newArr)
    const maxProduct  = Math.max(...newArr);
    return maxProduct
}

const A1 = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = () => {
      const arr = input.split(",");
       const result = adjacentElementsProduct(arr)
        setResult(result)
    }
  return (
    <>
    <input onChange={(e) => setInput(e.target.value)}/>
    <button onClick={handleClick}>Find biggest product</button>
    <h1>Tich lon nhat: {result}</h1>
    </>
  )
}

export default A1