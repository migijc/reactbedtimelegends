import React, { useEffect, useRef, useState } from 'react';
import FormInfo from './FormInfo';

export default function CharacterInteractionsForm({setInteraction}){
    const [isFormValid, setIsFormValid] = useState(false)
    const formRef = useRef(null)
    const {character1, character2, dialogue, conflict, alliance} = FormInfo().myStory.interaction;
    const listOfInputs = [character1, character2, dialogue, conflict, alliance];
    
    const handleSubmit = () => {
        if(isFormValid){
            let children = [...formRef.current.children];
            children.shift()
            children.pop()
            let mainCharacter = {};
            
            children.forEach(input =>{
                mainCharacter[input.name] = input.value;
            })
            setInteraction(mainCharacter)
        }
    }


    return (
        <form ref={formRef}>
            <h1>Please describe how the main character interacts with other characters in the story. Include their dialogues, conflicts, and alliances.</h1>
            {listOfInputs.map(input => {
                return (
                    <input onChange={()=>setIsFormValid(formRef.current.checkValidity())} required={input.required} placeholder={input.placeholder} name={input.name}/>
                )
            })}
            <button type='button' onClick={handleSubmit}>Next</button>
        </form>
    )
}