
// import { tags } from './utils'


const activities = [
    { name: 'Play [agricula]', tags: ['Boardgames'], type: 'activity' },
    { name: 'Watch [basketball]', tags: ['Sports'], type: 'activity' },
    { name: 'Watch [cabin in the woods]', tags: ['Movies'], type: 'activity' },
    { name: 'Play [streets of rogue]', tags: ['Video Games'], type: 'activity' },
]

const typeOrder = [
    "start time",
    "ice breaker",
    "food",
    "drink",
    "activity",
    "end time",
]

const getTagState = (attendee, tagName) => {
    console.log("checking tag state", { a: attendee.tags, tagName })

    return attendee.tags.find(t => t.name === tagName)
}


const rules = [
    // where Alcohol disliked
    { ifTrue: { name: "No alcohol", type: 'drink', weight: 2 }, test: (a) => getTagState(a, "Alchohol") === 3, },
]

// const Ice Breakers = [



export const getTypeOrder = (type) => typeOrder.indexOf(type)

export const baseEveningPlan = {

    activities: [

        { name: "18:00", type: 'start time' },
        { name: "19:00", type: 'start time' },
        { name: "Order pizza", type: 'food' },
        { name: "Drink beer", type: 'drink' },
        { name: "Play boardgames", type: 'activity' },
        { name: "23:00", type: 'end time' },



    ],
}

export const createSuggestions = (attendees) => {

    const eveningPlan = { ...baseEveningPlan }

    for (const { test, ifTrue } of rules) {
        console.group("[createSuggestions]", { ifTrue })
        for (const attendee of attendees) {
            console.log("testing...", test(attendee), { attendee })
            if (test(attendee)) {
                console.log("test passed", ifTrue)
                eveningPlan.activities.push(ifTrue)
            }
        }

        console.groupEnd()
    }



    return eveningPlan
}