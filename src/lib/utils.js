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
].map((subCategory) => ({ ...subCategory, parent: "Boardgames" }))

const sportsSubCategories = [
    { name: "Football", },
    { name: "Basketball", },
    { name: "Tennis", },
    { name: "Rugby", },
].map((subCategory) => ({ ...subCategory, parent: "Sports" }))

const movieSubCategories = [
    { name: "Action", },
    { name: "Comedy", },
    { name: "Horror", },
    { name: "Thriller", },
].map((subCategory) => ({ ...subCategory, parent: "Movies" }))

const videoGameSubCategories = [
    { name: "RPG", },
    { name: "FPS", },
    { name: "Casual", },
    { name: "MOBA", },
].map((subCategory) => ({ ...subCategory, parent: "Video Games" }))

export const tags = [
    {
        type: 'tag', category: 'Activities', parent: null, name: "Boardgames"
    },
    { type: 'tag', category: 'Activities', parent: null, name: "Sports", },
    { type: 'tag', category: 'Activities', parent: null, name: "Movies", },
    { type: 'tag', category: 'Activities', parent: null, name: "Video Games", },

    { type: 'tag', category: 'Diet', parent: null, name: "Animal Products" },
    { type: 'tag', category: 'Diet', parent: null, name: "Gluten" },
    { type: 'tag', category: 'Diet', parent: null, name: "Alchohol" },
    { type: 'tag', category: 'General', parent: null, name: "Likes to Party" },
    { type: 'tag', category: 'General', parent: null, name: "Conversationalist" },
    { type: 'tag', category: 'General', parent: null, name: "Foodie" },
    ...boardGameSubCategories,
    ...sportsSubCategories,
    ...movieSubCategories,
    ...videoGameSubCategories,

].map((tag) => ({ ...tag, state: 1 }))

export const attendeeTemplate = () => JSON.parse(JSON.stringify(({
    name: generateName(),
    tags,
})))