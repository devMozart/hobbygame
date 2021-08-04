const SceneType = Object.freeze({ "Dialogue": "dialogue", "Event": "event" });
const CharacterTalking = Object.freeze({ "Left": "left", "Right": "right" });

const Story = {
    scenes: [
        { 
            id: 1,
            type: SceneType.Dialogue,
            content: {
                background: "farmland.png",
                leftCharacter: {
                    name: "Queen Meve",
                    image: "meve.png"
                },
                rightCharacter: {
                    name: "Caldwell",
                    image: "gascon.png"
                },
                pages: [
                    {
                        id: 1,
                        talking: CharacterTalking.Right,
                        text: "The \"Strays of Spalla,\" the bandits... I was to tend to during Your Grace's absence... err... The situation's gotten out of hand, I fear.",
                        choices: [
                            {
                                text: "Disappointing.",
                                leadToPage: 2
                            },
                            {
                                text: "Settle down, Caldwell.",
                                leadToPage: 3
                            }
                        ]
                    },
                    {
                        id: 2,
                        talking: CharacterTalking.Left,
                        text: "I trusted you to deal with this matter on your own, Caldwell. I am disappointed in you, but no matter, I shall have to ride out and deal with these bandits myself. Follow along, Caldwell.",
                        choices: [
                            {
                                text: "",
                                leadToScene: 2
                            },
                        ]
                    },
                    {
                        id: 3,
                        talking: CharacterTalking.Left,
                        text: "Don't worry old friend, we will deal with the bandits together. Follow along, Caldwell.",
                        choices: [
                            {
                                text: "",
                                leadToScene: 2
                            },
                        ]
                    }
                ]

            }
        },
        { 
            id: 2,
            type: SceneType.Event,
            content: {
                title: "The Road's Edge",
                pages: [
                    {
                        text: "Count Caldwell rode at the column's head, scanning its flanks with a wary eye that, despite his advanced age, prodved very sharp indeed... \"Your Majesty! Bandits! There, at the tree line!\" The count's footmen, unaccustomed to escorting their queen, sought to shield her with their bodies, and assumed a tight formation to do so. They were promptly knocked aside as Meve charged headlong at the bandits, brandishing her blade and bellowing a ferocious cry. \"Attack! Charge!\"",
                        image: "bandit.jpg",
                        choices: [
                            {
                                text: "",
                                leadToScene: 3
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export default Story;