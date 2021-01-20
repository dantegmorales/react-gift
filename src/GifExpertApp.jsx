import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = ()=>{

    //Declaramos el state que nos permite contener nuestras categorias
    const [categories, setCategories] = useState(['Naruto']);

    return(
    <>
        <h1>GifExpertApp</h1>
        <h3>By Dante G Morales</h3>
        <h4>Using React</h4>
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