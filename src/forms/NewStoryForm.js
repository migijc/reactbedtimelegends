import React, { useEffect, useRef, useState } from'react';
import CharacterInteractionsForm from './CharactrerInteractionsForm';
import FormInfo from './FormInfo';
import MainCharacterForm from './MainCharacterForm';
import PlotElementsForm from './PlotElementsForm';
import SettingFrom from './SettingForm';
import SupportingCharacterForm from './SupportingCharacterForm';


export default function NewStoryForm(props){
    const [mainCharacter, setMainCharacter] = useState(null);
    const [supportCharacter, setSupportingCharacter] = useState(null);
    const [setting, setSetting] = useState(null);
    const [plotElements, setPlotElements] = useState(null);
    const [interaction, setInteraction] = useState(null);
    const [formComplete, setFormComplete] = useState(false);

    const {setStory} = props;

    useEffect(()=>{
        if(mainCharacter && supportCharacter && setting && plotElements && interaction){
            setFormComplete(true)
        }
    })

    const getFormData = () => {
        const formData = {
            mainCharacter,
            supportCharacter,
            setting,
            plotElements,
            interaction,
        }
        return formData
    }

    useEffect(()=>{
        console.log('12')
        if(formComplete && plotElements){
            handleSubmit()
        }
    })

    const handleSubmit = async () => {
        let payload = getFormData();
        payload = JSON.stringify(payload)
        let result = await fetch('http://localhost:3000/storydata', {body: payload, method:'POST', headers: {"Content-Type": 'application/json'}})
        result = await result.json()
        setStory(result.text)
    }

    return (
        <form>
            {!mainCharacter && <MainCharacterForm setMainCharacter={setMainCharacter}/>}
            {mainCharacter && !supportCharacter && <SupportingCharacterForm setSupportingCharacter={setSupportingCharacter}/>}
            {supportCharacter && !interaction && <CharacterInteractionsForm setInteraction={setInteraction}/>}
            {interaction && !setting && <SettingFrom setSetting={setSetting}/>}
            {setting && !plotElements && <PlotElementsForm setPlotElements={setPlotElements} handleSubmit={handleSubmit}/>}
        </form>
    )


}









// {!mainCharacter && formSections[0].map(field => <input onChange={()=> setFormValid(formRef.current.checkValidity())} required placeholder={field.placeholder} name={field.name}/>)}
// {formValid && <button type='button' onClick={(e)=> e.target}>Next</button>}


            // <form method='POST' action='http://localhost:3000/storydata' ref={formRef} >
      

            // </form>