export function generateName() {
    const n1 = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
    const n2 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Zero']
    return n1[Math.round(Math.random() * (n1.length - 1))] + '-' + n2[Math.round(Math.random() * (n2.length - 1))]
}


const boardGameSubCategories = [
    { name: "Deckbuilders", },
    { name: "Worker placement", },
    { name: "Card games", },
    { name: "Cooperative", },
]

const sportsSubCategories = [
    { name: "Football", },
    { name: "Basketball", },
    { name: "Tennis", },
    { name: "Rugby", },]

const movieSubCategories = [
    { name: "Action", },
    { name: "Comedy", },
    { name: "Horror", },
    { name: "Thriller", },
]

const videoGameSubCategories = [
    { name: "RPG", },
    { name: "FPS", },
    { name: "Casual", },
    { name: "MOBA", },
]

export const attendeeTags = {
    Activities: [
        {
            name: "Boardgames", subCategories: boardGameSubCategories
        },
        { name: "Sports", subCategories: sportsSubCategories },
        { name: "Movies", subCategories: movieSubCategories },
        { name: "Video Games", subCategories: videoGameSubCategories },
    ],

    Diet: [
        { name: "Animal Products" },
        { name: "Gluten" },
        { name: "Alchohol" },
    ],
    General: [
        { name: "Likes to Party" },
        { name: "Conversationalist" },
        { name: "Foodie" },

    ],
}

export const attendeeTemplate = () => ({
    name: generateName(),
    ...attendeeTags,
})


