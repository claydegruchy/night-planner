<script>
  import StringInput from "./StringInput.svelte";
  export let attendee;
  export let removeAttendee;
</script>

<div class="attendee">
  <h1><StringInput bind:value={attendee.name}>Name</StringInput></h1>
  <div>
    <h2>Activities</h2>
    <slot name="activities" />
  </div>
  <div>
    <h2>Diet</h2>
    <slot name="diet" />
  </div>

  <div>
    <h2>General</h2>
    <slot name="general" />
  </div>
  <button on:click={() => removeAttendee(attendee)}>Remove</button>
</div>

<style>
  .attendee {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
</style>
