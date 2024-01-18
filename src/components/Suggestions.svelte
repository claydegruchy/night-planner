<script>
  import { createSuggestions } from "$lib/suggestionRules";
  export let attendees;
  let suggestions = [];

  $: suggestions = createSuggestions($attendees);
  $: attendees, console.log({ suggestions });
</script>

<div>
  {#each suggestions as suggestion}
    <h2>{suggestion.type}</h2>
  {/each}
</div>
