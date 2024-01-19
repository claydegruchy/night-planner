
// import { tags } from './utils'


const activities = [
    { name: 'Play [agricula]', tags: ['Boardgames'], type: 'activity' },
    { name: 'Watch [basketball]', tags: ['Sports'], type: 'activity' },
    { name: 'Watch [cabin in the woods]', tags: ['Movies'], type: 'activity' },
    { name: 'Play [streets of rogue]', tags: ['Video Games'], type: 'activity' },
]

const typeOrder = [
    "organisation",
    "start time",
    "ice breaker",
    "food",
    "drink",
    "activity",
    "end time",
]

const getTagState = (attendee, tagName) => attendee.tags.find(t => t.name === tagName)?.state


const rules = [
    // where Alcohol disliked
    { ifTrue: { name: "No alcohol", type: 'drink', weight: 2 }, test: (a) => getTagState(a, "Alchohol") === 3, },
]

// const Ice Breakers = [



export const getTypeOrder = (type) => typeOrder.indexOf(type)

export const baseEveningPlan = {

    activities: [
        { name: "13:00", type: 'start time' },
        { name: "18:00", type: 'start time' },
        { name: "18:00", type: 'start time' },
        { name: "19:00", type: 'start time' },
        { name: "Order pizza", type: 'food' },
        { name: "Order asian", type: 'food' },
        { name: "Cook dinner", type: 'food' },
        { name: "Drink beer", type: 'drink' },
        { name: "Drink wine", type: 'drink' },
        { name: "Play boardgames", type: 'activity' },
        { name: "Watch sports", type: 'activity' },
        { name: "Lan party", type: 'activity' },
        { name: "Watch a movie", type: 'activity' },
        { name: "23:00", type: 'end time' },
    ],
}

export const createSuggestions = (attendees) => {

    const eveningPlan = JSON.parse(JSON.stringify(baseEveningPlan))

    for (const { test, ifTrue } of rules) {
        // console.group("[createSuggestions]", { ifTrue })
        for (const attendee of attendees) {
            // console.log("testing...", test(attendee), { attendee })
            if (test(attendee)) {
                eveningPlan.activities.push(ifTrue)
            }
        }

        // console.groupEnd()
    }

    eveningPlan.activities = eveningPlan.activities
        .map(a => ({ ...a, weight: a.weight ? a.weight : 0 }))
        .sort((a, b) => getTypeOrder(a.type) - getTypeOrder(b.type))



    return eveningPlan
}