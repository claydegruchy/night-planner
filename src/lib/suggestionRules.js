
// import { tags } from './utils'


const activities = [
    { name: 'Play a [agricula]', tags: ['Boardgames'], type: 'activity' },
    { name: 'Watch [basketball]', tags: ['Sports'], type: 'activity' },
    { name: 'Watch [cabin in the woods]', tags: ['Movies'], type: 'activity' },
    { name: 'Play [streets of rogue]', tags: ['Video Games'], type: 'activity' },
]

const typeOrder = [
    "iceBreaker",
    "backgroundMusic",
    "food",
    "drink",
    "activity",
]


const rules = [
    // where Alcohol disliked
    { ifTrue: { name: "No alcohol", type: 'drink' }, test: (attendees) => attendees.some((attendee) => attendee.tags.some((tag) => tag.name === "Alcohol" && tag.value === "dislike")), },
]

// const iceBreakers = [



export const getTypeOrder = (type) => typeOrder.indexOf(type)

export const createSuggestions = (attendees) => {

    let startTime = 6
    let options = [
        { type: "iceBreaker", },
        { type: "activity", },
        { type: "food", },
        { type: "drink", },
    ]

    for (const { test, ifTrue } of rules) {
        if (test(attendees)) options.push(ifTrue)
    }




    return options
}