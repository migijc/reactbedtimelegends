import React, { useEffect, useRef, useState } from 'react';
import FormInfo from './FormInfo';

export default function MainCharacterForm({setMainCharacter}){
    const [isFormValid, setIsFormValid] = useState(false)
    const formRef = useRef(null)
    const {abilities, age, appearance, gender, mainCharacterName, personality} = FormInfo().myStory.characterTraits;
    const listOfInputs = [mainCharacterName, age, gender, personality, appearance, abilities];
    
    const handleSubmit = () => {
        if(isFormValid){
            let children = [...formRef.current.children];
            children.shift()
            children.pop()
            let mainCharacter = {};
            
            children.forEach(input =>{
                mainCharacter[input.name] = input.value;
            })
            setMainCharacter(mainCharacter)
            
        }
    }


    return (
        <form ref={formRef}>
            <h1>Please provide the following details for the main character</h1>
            {listOfInputs.map(input => {
                return (
                    <input onChange={()=>setIsFormValid(formRef.current.checkValidity())} required={input.required} placeholder={input.placeholder} name={input.name}/>
                )
            })}
            <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
    )
}