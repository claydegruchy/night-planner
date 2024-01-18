<script>
  import StringInput from "./StringInput.svelte";
  export let attendee;
</script>

<div>
  <h1><StringInput bind:value={attendee.name}>Name</StringInput></h1>
  <div>
    <h2>Activities</h2>
    <slot name="activities" />
  </div>
  <div>
    <h2>Diet</h2>
    <slot name="diet" />
  </div>
</div>

<style>
</style>
