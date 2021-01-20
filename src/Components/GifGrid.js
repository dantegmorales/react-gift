import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridItem } from "./GifGridItem";

export const GifGrid = ({category})=>{


    const {data:images,loading} = useFetchGifs(category);

    return (
    <>
        <h3 className="animate__animated animate__fadeIn animate__slower">{category}</h3>
        {loading && <h3 className="animate__animated animate__flash animate__slower">Loading...</h3>}
        <div className="card-grid">
                {images.map((img)=>
                (<GridItem 
                    key={img.id} 
                    {...img} 
                />))}
        </div>
    </>
    );
}