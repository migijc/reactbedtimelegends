import React, { useEffect, useRef, useState } from 'react';
import FormInfo from './FormInfo';

export default function SettingFrom({setSetting}){
    const [isFormValid, setIsFormValid] = useState(false)
    const formRef = useRef(null)
    const {location, timePeriod, atmosphere} = FormInfo().myStory.setting;
    const listOfInputs = [location, timePeriod, atmosphere];
    
    const handleSubmit = () => {
        if(isFormValid){
            let children = [...formRef.current.children];
            children.shift()
            children.pop()
            let mainCharacter = {};
            
            children.forEach(input =>{
                mainCharacter[input.name] = input.value;
            })
            setSetting(mainCharacter)
            
        }
    }


    return (
        <form ref={formRef}>
            <h1>Please describe the setting of the story</h1>
            {listOfInputs.map(input => {
                return (
                    <input onChange={()=>setIsFormValid(formRef.current.checkValidity())} required={input.required} placeholder={input.placeholder} name={input.name}/>
                )
            })}
            <button type='button' onClick={handleSubmit}>Next</button>
        </form>
    )
}