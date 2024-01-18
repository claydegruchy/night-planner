<script>
  export let value;
  export let label = "String Input";
</script>

<div class="string-input">
  <input type="text" placeholder={label} id="string-input" bind:value />
</div>
