<script>
  export let tag;
  export let attendee;
  if (!tag.state) tag.state = "unselected";

  const cycleState = (option) => {
    if (tag.state == "unselected") {
      tag.state = "likes";
    } else if (tag.state == "likes") {
      tag.state = "dislikes";
    } else if (tag.state == "dislikes") {
      tag.state = "unselected";
    }
  };
</script>

<div>
  {#if tag.state == "unselected"}
    <button on:click={cycleState}>🤷{tag.name}</button>
  {:else if tag.state == "likes"}
    <button on:click={cycleState} class="likes">👌{tag.name}</button>
  {:else if tag.state == "dislikes"}
    <button on:click={cycleState} class="dislikes">😠{tag.name}</button>
  {:else if tag.state == "mixed"}
    <button on:click={cycleState} class="mixed">🤔{tag.name}</button>
  {:else}error{/if}
</div>

<style>
  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 2px 8px;
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

  .mixed {
    background-color: #ffc;
    box-shadow: 4px 2px 0px #eee;
  }

  div {
    display: inline-block;
  }
</style>
