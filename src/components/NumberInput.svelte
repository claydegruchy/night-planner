<!-- a number input compoent -->

<script>
  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let label = "Number Input";
</script>

<div class="number-input">
  <label for="number-input">{label}</label>
  <input type="number" id="number-input" bind:value {min} {max} {step} />
</div>
