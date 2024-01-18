<script>
  import StringInput from "./StringInput.svelte";
  import { tags } from "$lib/utils";
  export let attendee;
  export let removeAttendee;
</script>

<div class="attendee">
  <h1><slot name="title" /></h1>
  <slot name="tags" />

  <button on:click={() => removeAttendee(attendee)}>Remove</button>
</div>

<style>
  .attendee {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
</style>
