<script>
  export let node;
  export let showMenu;
</script>

{#if showMenu}
  <menu>
    <div>
      <button><i class="fa-solid fa-arrow-right"></i></button>
      <button><i class="fa-solid fa-minus"></i></button>
      <button><i class="fa-solid fa-arrows-left-right"></i></button>
      <button><i class="fa-solid fa-trash-can"></i></button>
      <label>
        <i class="fa-solid fa-palette edit"></i>
        <input type="color" bind:value={node.color} />
      </label>
    </div>
    <div>
      <input
        type="range"
        min="5"
        max="60"
        class="edit"
        bind:value={node.size}
      />
      <small>{node.size}px</small>
    </div>
  </menu>
{/if}

<style>
  input[type="color"] {
    display: none;
  }
</style>
