import React, { useState,useEffect } from "react";

export const GifGrid = ({category})=>{
    
    const [count,setCount]= useState(0);

    //Ejecuta el hook useEffect que permite ejecutar la función cuando se carga el componente
    useEffect( ()=>{
        getGifs();
    },[])

    //Función que nos permite hacer la petición al API de Giphy
    const getGifs = async ()=>{
        const url = 'https://api.giphy.com/v1/gifs/trending?api_key=Ji3hUw0UWRgKS9QkgQXwnCXGgzzQP7xA&limit=10&q=naruto';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs =  data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        });
    console.log(gifs);
    }

    return (
    <>
        <h3>{count}</h3>
        <h3>{category}</h3>
        <button onClick={()=>setCount(count+1)}>Count</button>
    </>
    );
}