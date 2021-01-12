import React, { useState } from "react";

const GifExpertApp = ()=>{

    //Declaramos el state que nos permite contener nuestras categorias
    const [categories, setcategories] = useState(['Neon Genesis Evengelion','Akira','Naruto']);

    //Creamos una función que nos permita agregar elementos a nuestro state
    const handleAdd = ()=>{
        //setcategories(['Dragon Ball',...categories]);
        setcategories(cats => [...cats,'Dragon Ball'])
    }

    return(
    <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>
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