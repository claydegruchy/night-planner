import { writable } from "svelte/store";
import { attendeeTemplate } from "$lib/utils";

export const attendees = writable([]);


export const addAttendee = () => {
    attendees.update((attendees) => [...attendees, attendeeTemplate()]);
};
export const removeAttendee = (attendee) => {
    if (attendees) {
        attendees.update((attendees) => attendees.filter((a) => a !== attendee));
        return;
    }
    attendees.update((attendees) => attendees.slice(0, -1));
};

export const updateAttendee = (attendee, key, value) => {
    attendees.update((attendees) => {
        const index = attendees.indexOf(attendee);
        attendees[index][key] = value;
        return attendees;
    });
}
