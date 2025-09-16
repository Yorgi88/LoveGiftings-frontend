import { useState } from "react";

import React from 'react'
import ItemList from "./ItemList";


const Testss = () => {
    const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];

    const [list, setList] = useState(
        initialList
    )


    function handleToggle(artworkID, nextSeen){
        setList(list.map(artwork => {
            if (artwork.id === artworkID) {
                return {
                    ...artwork,
                    seen: nextSeen
                }
            }else{
                return artwork;
            }
        }))
    }
  return (
        <>
    
        <h1>My Bucket List</h1>
        <h2>List of art to seen </h2>
        <ItemList artworks={list} onToggle={handleToggle}/>

        </>
  )
}


export default Testss