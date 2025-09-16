import React, { useEffect, useState } from 'react';
import Img from '../assets/Spinner-Img.svg'
const LoadingIndicator = () => {
    const [text, setText] = useState('');
    const [showSpin, setShowSpin] = useState(true);

    // useEffect(()=>{
    //     //This simulates fetching data from backend perhaps
    //     setTimeout(() => {
    //         setShowSpin(false);
    //         setText(
    //             '...'
    //         )
    //     }, 5500);
    // }, [])
  return (
    <div className='text-center mb-4'>
        {
            showSpin ? (
                <img src={Img} alt="" style={{'justifyContent': 'center'}}/>
            ) : (
                <h3>
                    {text}
                </h3>
            )
        }
    </div>
  )
}

export default LoadingIndicator