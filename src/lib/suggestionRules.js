
import { attendeeTags } from './utils'

const typeOrder = [
    "iceBreaker",
    "backgroundMusic",
    "food",
    "drink",
    "activity",
]
export const getTypeOrder = (type) => typeOrder.indexOf(type)

export const createSuggestions = (attendees) => {

    let startTime = 6
    let options = [
        { type: "iceBreaker", },
        { type: "backgroundMusic", },
        { type: "activity", },
        { type: "food", },
        { type: "drink", },
    ]



    // get all tags by number of attendees


    const topLevelTags = Object.keys(attendeeTags)
    console.log(topLevelTags)

    return options
}