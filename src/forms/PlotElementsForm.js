import React, { useEffect, useRef, useState } from 'react';
import FormInfo from './FormInfo';

export default function PlotElementsForm(props){
    const [isFormValid, setIsFormValid] = useState(false)
    const {setPlotElements} = props;
    const formRef = useRef(null)
    const {incitingIncident, climax, resolution, themes, endingType} = FormInfo().myStory.plotElements;
    const listOfInputs = [incitingIncident, climax, resolution, themes, endingType];
    
    const handleSubmit = () => {
        if(isFormValid){
            let children = [...formRef.current.children];
            children.shift()
            children.pop()
            let mainCharacter = {};
            
            children.forEach(input =>{
                mainCharacter[input.name] = input.value;
            })
            setPlotElements(mainCharacter)
        }
    }


    return (
        <form ref={formRef}>
            <h1>Please set the following plot elements</h1>
            {listOfInputs.map(input => {
                return (
                    <input onChange={()=>setIsFormValid(formRef.current.checkValidity())} required={input.required} placeholder={input.placeholder} name={input.name}/>
                )
            })}
            <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
    )
}