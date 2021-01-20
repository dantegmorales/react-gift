import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories})=>{

    //Creamos un estado para manejar el valor del input
    const [inputValue,setinputValue] = useState('');

    //Creamos una función que nos permite manejar el cambio de estado/valor del input
    const handleChange = (e)=>{
        setinputValue(e.target.value);
    }
    //Creamos una función que permite manejar el cambio de estado del formulariio
    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log('Submit Hecho');
        if (inputValue.trim().length>2){
            setCategories(cat=>[inputValue,...cat]);
            setinputValue('');
        }
    }

    return(
    <form onSubmit={handleSubmit}>
        <input
        placeholder="Escribe aquí para buscar imagenes"
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
    </form>
    );
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
export default AddCategory;