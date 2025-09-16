import React from 'react'
import { useState } from 'react';
import { sculptureList } from './data';


const Test = () => {
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);
const hasNext = index < sculptureList.length - 1;

function handleNextClick(){
    if (hasNext) {
        setIndex(index + 1)
    }else{
        setIndex(0);
    }
}

function handleMoreClick(){
    setShowMore(!showMore);

}
let sculpture = sculptureList[index];

  return (
    <>

    <button onClick={handleNextClick}>Next</button>

    <h2>
        <p>{sculpture.name}</p>
        <p>{sculpture.artist}</p>
    </h2>

    <h3>
        
        ({index + 1} / {sculptureList.length})
    </h3>

    <button onClick={handleMoreClick}>
        {showMore ? "Show Less" : "Show More"}
    </button>
    {showMore && sculpture.description}
    <img src={sculpture.url} alt={sculpture.alt} />
    </>
    // <>

    //     <button onClick={handleNextClick}>
    //         Next
    //     </button>
    //     <h2>
    //         <i>{sculpTure.name}</i>
    //         by {sculpTure.artist}
    //     </h2>

    //     <h3>
    //         ({index + 1} / {sculptureList.length})
    //     </h3>

    //     <button onClick={handleMoreClick}>
    //         {showMore ? 'show less' : 'show more'}
    //     </button>
    //     {showMore && <p>{sculpTure.description}</p>}
    //     <img src={sculpTure.url} alt={sculpTure.alt} />
    // </>
  

  )
}

export default Test