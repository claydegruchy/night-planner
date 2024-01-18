<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { setContext } from "svelte";

  import Attendee from "../components/Attendee.svelte";
  import Tag from "../components/Tag.svelte";
  import Suggestions from "../components/Suggestions.svelte";
  import StringInput from "../components/StringInput.svelte";

  import {
    attendees,
    addAttendee,
    removeAttendee,
    updateAttendee,
  } from "$lib/sharedState";

  import { tags } from "$lib/utils";

  // $: attendees, console.log($attendees);
  onMount(() => {
    addAttendee();
  });

  const tagCategories = [
    ...new Set(tags.map((t) => t.category).filter((t) => t)),
  ];
</script>

<body>
  <button on:click={addAttendee}>Add Attendee</button>
  <div class="container">
    <div class="attendees">
      {#each $attendees as attendee}
        <Attendee bind:attendee {removeAttendee}>
          <div slot="title">
            <StringInput bind:value={attendee.name}>Name</StringInput>
          </div>
          <div slot="tags">
            {#each tagCategories as category}
              <div>
                <h4>{category}</h4>
                {#each attendee.tags.filter((t) => t.category == category) as tag}
                  <Tag {attendee} {tag}>
                    {tag.name}
                  </Tag>
                {/each}
              </div>
            {/each}
          </div>
        </Attendee>
      {/each}
    </div>
    <div class="actitivies">
      <Suggestions {attendees} />
    </div>
  </div>
</body>

<style>
  .container {
    display: flex;
    flex-direction: row;
    /* cut the flex in half down the middle, then centre each part, ignoreing content size */
    justify-content: space-evenly;
    align-items: center;
  }

  .attendees {
    /* flex: 1; */
  }

  .activities {
    /* flex: 1; */
  }
</style>
