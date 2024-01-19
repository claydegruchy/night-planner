<script>
  import { createSuggestions, baseEveningPlan } from "$lib/suggestionRules";
  export let attendees;
  let eveningPlan = baseEveningPlan;

  $: eveningPlan = createSuggestions($attendees);

  let { activities } = eveningPlan;

  //   $: attendees, console.log({ activities });
</script>

<div>
  {#each [...new Set(activities.map((s) => s.type))] as type}
    <h2>{type}</h2>
    {#each activities.filter((s) => s.type == type) as activity}
      <div>
        <h3>{activity.name}</h3>
      </div>
    {/each}
  {/each}
</div>

<style>
  /* captialise h2 */
  h2 {
    text-transform: capitalize;
  }
</style>
