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

  let value = 0;

  const addAttendee = () => {
    attendees.update((attendees) => [...attendees, attendeeTemplate()]);
  };

  // $: attendees, console.log($attendees);

  onMount(() => {
    addAttendee();
  });
</script>

<body>
  <button on:click={addAttendee}>Add Attendee</button>
  <NumberInput bind:value />

  <div class="attendees">
    {#each $attendees as attendee}
      <Attendee bind:attendee>
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
  </div></body
>
