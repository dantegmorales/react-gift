import React from "react";
import '../index.css';

export const GridItem = ({id,title,url})=>{


    return(
    <div className="card animate__animated animate__fadeIn animate__slower">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
    )
}