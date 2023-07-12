

const myStory = {
    characterTraits: {
      gender: { type: "text", required: true, placeholder: "Gender", name: "gender" },
      age: { type: "number", required: true, placeholder: "Age", name: "age" },
      appearance: { type: "text", required: true, placeholder: "Appearance", name: "appearance" },
      personality: { type: "text", required: true, placeholder: "Personality", name: "personality" },
      abilities: { type: "text", required: true, placeholder: "Abilities", name: "abilities" },
      mainCharacterName:{type: "text", required: true, placeholder: "Character Name", name: "mainCharacterName"}
    },

    supportCharacters: {
      name: { type: "text", required: true, placeholder: "Name", name: "name" },
      role: { type: "text", required: true, placeholder: "Role", name: "role" },
    },

    interaction: {
      character1: { type: "text", required: true, placeholder: "Character 1", name: "character1" },
      character2: { type: "text", required: true, placeholder: "Character 2", name: "character2" },
      dialogue: { type: "text", required: true, placeholder: "Dialogue", name: "dialogue" },
      conflict: { type: "text", required: true, placeholder: "Conflict", name: "conflict" },
      alliance: { type: "text", required: true, placeholder: "Alliance", name: "alliance" },
    },

    setting: {
      location: { type: "text", required: true, placeholder: "Location", name: "location" },
      atmosphere: { type: "text", required: true, placeholder: "Atmosphere", name: "atmosphere" },
      timePeriod: { type: "text", required: true, placeholder: "Time Period", name: "timePeriod" },
    },

    challenge: {
      challenge: { type: "text", required: true, placeholder: "Challenge", name: "challenge" },
    },
    
    plotElements: {
      incitingIncident: { type: "text", required: true, placeholder: "Inciting Incident", name: "incitingIncident" },
      climax: { type: "text", required: true, placeholder: "Climax", name: "climax" },
      resolution: { type: "text", required: true, placeholder: "Resolution", name: "resolution" },
      themes: { type: "text", required: true, placeholder: "Theme", name: "theme" },
      endingType: { type: "text", required: true, placeholder: "Ending Type", name: "endingType" },

      
    },
  
};

  


const endings = [
    "Happy Ending: The main characters overcome challenges, achieve their goals, and find happiness or fulfillment in the conclusion of the story.",
    "Bittersweet Ending: The story concludes with a mix of positive and negative elements, leaving the characters with a sense of both joy and sadness.",
    "Unexpected Twist: The story takes a surprising turn, introducing a plot twist that challenges the characters' expectations and provides an unexpected resolution.",
    "Moral Lesson: The ending emphasizes a specific moral or life lesson, imparting wisdom or insight to the characters and readers.",
    "Ambiguous Ending: The story concludes with an open interpretation, leaving readers to speculate or imagine what might happen next.",
    "Heroic Sacrifice: A character makes a selfless sacrifice to save others or achieve a greater good, leading to a poignant ending.",
    "Redemption: A character who was flawed or conflicted throughout the story experiences a transformation and finds redemption in the end.",
    "Cliffhanger: The story ends on a suspenseful note, leaving readers eager for the next installment or continuation of the story.",
    "Reflective Ending: The ending allows characters to reflect on their journey, personal growth, or the impact of their actions, providing closure and introspection.",
    "Twist of Fate: The story concludes with a sudden turn of events or a stroke of luck that dramatically changes the outcome for the characters.",
  ];

  const conflicts = [
    "Argument: The main character and supporting character engage in a heated argument about an important decision.",
    "Betrayal: A supporting character betrays the main character, leading to a significant conflict and loss of trust.",
    "Obstacle: The main character faces a challenging obstacle that requires the support and assistance of a supporting character.",
    "Misunderstanding: A misunderstanding between the main character and a supporting character causes tension and conflict in the story.",
    "Rivalry: The main character and a supporting character become rivals, competing against each other in a contest or quest.",
  ];
  
  const alliances = [
    "Unlikely Allies: The main character and a supporting character who were initially enemies form an unexpected alliance to overcome a common threat.",
    "Friendship: The main character and supporting character develop a deep friendship, supporting and relying on each other throughout the story.",
    "Teamwork: The main character and supporting character collaborate and work together, utilizing their unique strengths to achieve a shared goal.",
    "Mentorship: A supporting character becomes a mentor to the main character, providing guidance and wisdom throughout their journey.",
    "Companions: The main character and supporting character become loyal companions, offering each other companionship and emotional support.",
  ];

  const plotElements = [
    "Inciting Incident: The main character discovers an old map that leads to a hidden treasure, sparking an adventure full of danger and excitement.",
    "Climax: The main character confronts their greatest fear and must make a courageous decision that determines the outcome of their quest.",
    "Resolution: With the help of their loyal friends, the main character defeats the villain, restores peace to the land, and returns home victorious.",
  ];

  
  const supportingCharacters = [
    "The Wise Sage: A wise and ancient character who provides guidance, advice, and mystical knowledge to the main character on their journey.",
    "The Loyal Sidekick: A faithful and dependable companion who accompanies the main character, offering unwavering support, humor, and assistance in times of need.",
    "The Mischievous Fairy: A playful and mischievous fairy who possesses magical abilities and aids the main character with enchanting tricks and spells.",
    "The Courageous Guardian: A brave and fearless warrior who protects the main character from dangerous adversaries and serves as their fierce protector.",
    "The Talking Animal: An intelligent and articulate animal companion who can communicate with the main character, offering wisdom, companionship, and unique perspectives.",
    "The Mentor: A seasoned and experienced mentor who trains and guides the main character, imparting valuable skills, knowledge, and life lessons.",
    "The Shapeshifter: A mysterious character who can transform into different forms, providing the main character with valuable assistance and unexpected surprises.",
    "The Inventor: A brilliant and innovative character who creates magical gadgets and tools that aid the main character in their quest or adventure.",
    "The Trickster: A cunning and unpredictable character who challenges the main character's assumptions and tests their wit and resourcefulness.",
    "The Enchantress: A powerful sorceress with mastery over spells and enchantments, who assists the main character with magical abilities and mystical solutions.",
  ];
  
  const challenges = [
    "Riddle: The main character encounters a complex riddle that must be solved to progress in the story.",
    "Dangerous Journey: The main character embarks on a perilous journey through treacherous lands or unforgiving terrain.",
    "Villainous Character: The main character faces a cunning and villainous adversary who seeks to thwart their progress.",
    "Mysterious Curse: The main character becomes entangled in a mysterious curse that must be broken to achieve their goal.",
    "Time Limit: The main character is faced with a race against time, needing to accomplish their task before a specific deadline.",
    "Lost Artifact: The main character must find and retrieve a lost artifact or treasure that holds great significance.",
    "Internal Conflict: The main character grapples with internal struggles, such as self-doubt or fear, that they must overcome.",
    "Elemental Trial: The main character undergoes a series of trials, each associated with an element (e.g., fire, water, air, earth).",
    "Betrayal: The main character experiences betrayal from someone they trust, leading to challenges in rebuilding trust and loyalty.",
    "Magical Obstacle: The main character encounters a magical obstacle, such as a bewitched forest or an enchanted maze, that they must navigate.",
  ];

  const themes = [
    "Friendship: Emphasizing the importance of loyalty, trust, and support between friends.",
    "Bravery: Highlighting acts of courage, overcoming fears, and facing challenges head-on.",
    "Kindness: Promoting acts of kindness, empathy, and compassion towards others.",
    "Perseverance: Focusing on the determination and resilience needed to overcome obstacles and achieve goals.",
    "Imagination: Celebrating the power of imagination, creativity, and thinking outside the box.",
    "Adventure: Portraying exciting journeys, exploration, and the thrill of discovering new worlds.",
    "Family: Exploring the bonds of family, the value of love and unity, and the dynamics between family members.",
    "Nature: Appreciating the beauty of nature, environmental conservation, and the interconnectedness of all living things.",
    "Identity: Examining self-discovery, embracing one's uniqueness, and finding one's place in the world.",
    "Hope: Inspiring optimism, faith, and the belief that better things are possible even in difficult times.",
  ];

  const atmospheres = [
    "Enchanted Forest",
    "Haunted Mansion",
    "Whimsical Wonderland",
    "Underwater Kingdom",
    "Futuristic City",
    "Ancient Ruins",
    "Dreamy Clouds",
    "Wild West Frontier",
    "Arctic Tundra",
    "Celestial Realm",
  ];

  const timePeriods = [
  "Medieval Era",
  "Ancient Egypt",
  "Wild West",
  "Renaissance",
  "Prehistoric Age",
  "Roaring Twenties",
  "Ancient Greece",
  "Victorian Era",
  "Space Age",
  "Post-Apocalyptic World",
];

const abilities = [
    "Telekinesis",
    "Invisibility",
    "Super strength",
    "Elemental control",
    "Shape-shifting",
    "Mind reading",
    "Healing powers",
    "Time manipulation",
    "Flight",
    "Precognition",
  ];

  const personalities = [
    "Kind-hearted and compassionate",
    "Brave and courageous",
    "Intelligent and analytical",
    "Adventurous and daring",
    "Witty and humorous",
    "Calm and composed",
    "Curious and inquisitive",
    "Loyal and dependable",
    "Empathetic and understanding",
    "Creative and imaginative",
  ];

  const appearances = [
    "Tall and muscular",
    "Short and petite",
    "Elegant and graceful",
    "Wild and unkempt",
    "Distinctive facial features",
    "Mysterious and enigmatic",
    "Youthful and vibrant",
    "Distinguished and regal",
    "Athletic and agile",
    "Exotic and striking",
  ];

  export default function FormInfo(){
    return {appearances, personalities, abilities, timePeriods, atmospheres, themes, challenges, supportingCharacters, endings, conflicts, alliances, plotElements, myStory}
  }