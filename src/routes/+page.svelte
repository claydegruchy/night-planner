<script>
  import "../app.css";
  import { onMount } from "svelte";
  import NumberInput from "../components/NumberInput.svelte";

  // import { sharedState } from "$lib/sharedState";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Attendee from "../components/Attendee.svelte";
  import Tag from "../components/Tag.svelte";

  import { attendeeTemplate } from "$lib/utils";

  export let attendees = writable([]);
  setContext("attendees", attendees);

  const addAttendee = () => {
    attendees.update((attendees) => [...attendees, attendeeTemplate()]);
    value++;
  };
  const removeAttendee = (attendee) => {
    if (attendees) {
      attendees.update((attendees) => attendees.filter((a) => a !== attendee));
      return;
    }
    attendees.update((attendees) => attendees.slice(0, -1));
    value--;
  };

  let value = 0;

  onMount(() => {
    addAttendee();
  });
</script>

<body>
  <button on:click={addAttendee}>Add Attendee</button>

  <div class="container">
    <div class="attendees">
      {value}
      {#each $attendees as attendee}
        <Attendee bind:attendee {removeAttendee}>
          <div slot="activities">
            {#each attendee.Activities as option}
              <Tag bind:option></Tag>
            {/each}
          </div>
          <div slot="diet">
            {#each attendee.Diet as option}
              <Tag bind:option></Tag>
            {/each}
          </div>
        </Attendee>
      {/each}
    </div>
    <div class="actitivies">hello</div>
  </div>
</body>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* 50/50 screen space beteween both, with both centre in their area, and a border on both */
    justify-content: space-evenly;
    border: 1px solid black;
  }
  /* overflow scroll attendees */
  .attendees {
    overflow-y: scroll;
    width: 50%;
  }
</style>
