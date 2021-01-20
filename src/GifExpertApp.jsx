import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = ()=>{

    //Declaramos el state que nos permite contener nuestras categorias
    const [categories, setCategories] = useState(['Naruto']);

    return(
    <>
        <h2>GifExpertApp</h2>
        <h3>By Dante G Morales</h3>
        <AddCategory setCategories={setCategories} />
        <hr></hr>
        <ol>
            {
                categories.map(category=>(
                <GifGrid
                    category={category}
                    key={category}
                />
                ))
            }
        </ol>
    </>
    );
}

export default GifExpertApp;