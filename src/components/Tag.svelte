<script>
  export let option;
  export let attendee;
  console.log(attendee.name);
  if (!option.state) option.state = "unselected";

  const cycleState = () => {
    if (option.state == "unselected") {
      option.state = "likes";
    } else if (option.state == "likes") {
      option.state = "dislikes";
    } else if (option.state == "dislikes") {
      option.state = "unselected";
    }
  };
</script>

{#if option.state == "unselected"}
  <button on:click={cycleState}>🤔{option.name}</button>
{:else if option.state == "likes"}
  <button on:click={cycleState} class="likes">👌{option.name}</button>
{:else if option.state == "dislikes"}
  <button on:click={cycleState} class="dislikes">😠{option.name}</button>
{:else}error{/if}

<style>
  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 4px;
    background-color: #eee;
    box-shadow: 4px 2px 0px #cfc;
  }

  .likes {
    background-color: #cfc;
    /* red drop shadow right */
    box-shadow: 4px 2px 0px #fcc;
  }

  .dislikes {
    background-color: #fcc;
    box-shadow: 4px 2px 0px #eee;
  }
</style>
