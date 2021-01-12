import React, { useState } from "react";


const AddCategory = ()=>{

    //Creamos un estado para manejar el valor del input
    const [inputValue,setinputValue] = useState('Hello world');

    //Creamos una función que nos permite manejar el cambio de estado/valor del input
    const handleChange = (e)=>{
        setinputValue(e.target.value);
    }
    //Creamos una función que permite manejar el cambio de estado del formulariio
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit Hecho');
    }

    return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
    </form>
    );
}

export default AddCategory;