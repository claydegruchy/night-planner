<script>
  import { createSuggestions, baseEveningPlan } from "$lib/suggestionRules";
  export let attendees;
  let eveningPlan = baseEveningPlan;

  $: eveningPlan = createSuggestions($attendees);
</script>

<div>
  {#each [...new Set(eveningPlan.activities.map((s) => s.type))] as type}
    {@const ofType = eveningPlan.activities.filter((a) => a.type == type)}
    <h2>{type}</h2>
    <div class="activities">
      {#each ofType as activity}
        {#if Math.max(...ofType.map((a) => a.weight)) == activity.weight && new Set(ofType.map((a) => a.weight)).size > 1}
          <div class="activity highlight">
            <h3>{activity.name}</h3>
          </div>
        {:else}
          <div class="activity">
            <h3>{activity.name}</h3>
          </div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  /* captialise h2 */
  h2 {
    text-transform: capitalize;
  }
  .activities {
    display: flex;
    flex-wrap: wrap;
  }
  .activity {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
  }
  .highlight {
    background-color: #ffc;
  }
</style>
