<script>
  export let tag;
  export let attendee;
</script>

<div>
  {#if tag.state == 1}
    <button on:click>🤷{tag.name}</button>
  {:else if tag.state == 2}
    <button on:click class="likes">👌{tag.name}</button>
  {:else if tag.state == 3}
    <button on:click class="dislikes">😠{tag.name}</button>
  {:else if tag.state == 4}
    <button on:click class="mixed">🤔{tag.name}</button>
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
