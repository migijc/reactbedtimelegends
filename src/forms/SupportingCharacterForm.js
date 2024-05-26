import React, { useEffect, useRef, useState } from 'react';
import FormInfo from './FormInfo';

export default function SupportingCharacterForm({setSupportingCharacter}){
    const [isFormValid, setIsFormValid] = useState(false)
    const formRef = useRef(null)
    const {name, role} = FormInfo().myStory.supportCharacters;
    const listOfInputs = [name,role];
    

    const handleSubmit = () => {
        if(isFormValid){
            let children = [...formRef.current.children];
            children.shift()
            children.pop()
            let mainCharacter = {};
            
            children.forEach(input =>{
                mainCharacter[input.name] = input.value;
            })
            setSupportingCharacter(mainCharacter)
        }
    }


    return (
        <form ref={formRef}>
            <h1>Please provide details for one or more supporting characters, such as friends, family members, or magical creatures. Include their names, appearances, and roles in the story.</h1>
            {listOfInputs.map(input => {
                return (
                    <input onChange={()=>setIsFormValid(formRef.current.checkValidity())} required={input.required} placeholder={input.placeholder} name={input.name}/>
                )
            })}
            <button type='button' onClick={handleSubmit}>Next</button>
        </form>
    )
}