import React from 'react';

export default function Home(props){
    return (
        <div className='home-content-container'>
            <h1>Welcome</h1>
            <p>{bedtimeStories[4][1]}</p>
            <button onClick={()=>props.setCreate(true)}>Create</button>
        </div>
    )
}

const bedtimeStories = [
    ["Language Development", "Bedtime stories expose children to a wide range of vocabulary, sentence structures, and storytelling techniques, which helps develop their language skills and comprehension abilities."],
    ["Imagination and Creativity", "Bedtime stories fuel children's imagination and creativity by allowing them to visualize characters and settings, enhancing their creative thinking skills."],
    ["Emotional Bonding", "Telling bedtime stories creates a special bonding time between parents and children, fostering a sense of security, trust, and closeness."],
    ["Moral Values and Life Lessons", "Bedtime stories convey important moral values and life lessons in a relatable and engaging manner, teaching children about virtues such as kindness, honesty, and empathy."],
    ["Cognitive Development", "Listening to bedtime stories stimulates children's cognitive development, enhancing their attention span, memory, and critical thinking skills."],
    ["Cultural Awareness", "Bedtime stories from different cultures expose children to diverse perspectives, fostering cultural awareness, acceptance, and appreciation for different traditions and beliefs."],
    ["Relaxation and Sleep Routine", "Bedtime stories create a calming atmosphere and help children wind down before sleep, promoting relaxation and a restful night's sleep."],
    ["Problem-Solving Skills", "Many bedtime stories present characters facing challenges, helping children learn problem-solving strategies and develop resilience."],
    ["Imbibing Values and Identity", "Bedtime stories reflect cultural, familial, and social values, helping children understand their identity, family traditions, and community values."],
    ["Love for Reading", "Regular exposure to bedtime stories cultivates a lifelong love for reading, encouraging children to explore books independently and enjoy the educational benefits of reading."],
  ];
  