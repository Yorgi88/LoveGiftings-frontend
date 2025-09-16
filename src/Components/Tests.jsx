import { useState } from "react";

// we gonna build a mini chat app, just reading from the docs
// next there will be learning on updating states

import React from 'react'

const Tests = () => {
// const [score, setScore] = useState(0);

// function increment(){
//     setScore(s => s + 1);
// }

// function decrement(){
//     setScore(s => s - 1)

// }

const [person, setPerson] = useState({
    name: 'Nikki De Saint',
    artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
});

function handleNameChange(e){
    setPerson({
        ...person,
        name: e.target.value,
    });
    
}

function handleTitleChange(e){
    setPerson({
        ...person,
        artwork: {
            ...person.artwork,
            title: e.target.value
        }
    });
}


function handleCityChange(e){
    setPerson({
        ...person,
        artwork: {
            ...person.artwork, 
            city: e.target.value,
        }
    })
}

function handleImageChange(e){
    setPerson({
        ...person,
        artwork: {
            ...person.artwork,
            image: e.target.value,
        }
    })
}

  return (
    <div>
        <label htmlFor="">
            Name: 
            <input type="text" value={person.name}  onChange={handleNameChange}/>
        </label>

        <label htmlFor="">
            Title:
            <input type="text" value={person.artwork.title} onChange={handleTitleChange}/>
        </label>

        <label htmlFor="">
            City:
            <input type="text" value={person.artwork.city} onChange={handleCityChange}/>
        </label>

        <label htmlFor="">
            Image:
            <input type="text" value={person.artwork.image} onChange={handleImageChange}/>
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {'by'}
            {person.name}
            <br />
            (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />


        {/* <button onClick={()=> increment()}>+ 1</button>

        <button 
        onClick={()=>{
            increment()
            increment()
            increment()
        }}>
            + 3
        </button>
        <button onClick={()=> decrement()}>- 1</button>
        <h2>score: {score}</h2> */}

    </div>
  )
}

export default Tests