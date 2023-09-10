<script>
  export let node;
  export let showMenu;
</script>

{#if showMenu}
  <menu>
    <div>
      <button class="button"><i class="fa-solid fa-arrow-right"></i></button>
      <button class="button"><i class="fa-solid fa-minus"></i></button>
      <button class="button"
        ><i class="fa-solid fa-arrows-left-right"></i></button
      >
      <button class="button"><i class="fa-solid fa-trash-can"></i></button>
      <label class="button">
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
  menu {
    position: absolute;
    left: calc(100% + 10px);
    background-color: white;
    box-shadow: 0px 0px 10px #0006;
    border-radius: 8px;
    padding: 5px 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    padding: 5px 0px;
  }

  small {
    color: #444;
  }

  input[type="color"] {
    display: none;
  }

  .button {
    background: none;
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    font-size: 20px;
    color: #aaa;
  }

  .button:hover {
    color: #000;
  }
</style>
