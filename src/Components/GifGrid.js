import React from "react";

export const GifGrid = ({category})=>{
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
    getGifs();
    return (
    <>
        <h3>{category}</h3>
    </>
    );
}