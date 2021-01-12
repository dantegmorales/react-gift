import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";

const GifExpertApp = ()=>{

    //Declaramos el state que nos permite contener nuestras categorias
    const [categories, setCategories] = useState(['Neon Genesis Evengelion','Akira','Naruto']);

    //Creamos una función que nos permita agregar elementos a nuestro state
    /* const handleAdd = ()=>{
        //setcategories(['Dragon Ball',...categories]);
        setcategories(cats => [...cats,'Dragon Ball'])
    } */

    return(
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr></hr>
        <ol>
            {
                categories.map(category=>{
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
    );
}

export default GifExpertApp;