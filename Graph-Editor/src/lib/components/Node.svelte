<script>
// @ts-nocheck

  export let node;
  import NodeMenu from "./NodeMenu.svelte";

  const mouse = { x: 0, y: 0 };

  let showMenu;

  function initDrag(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    document.onmousemove = drag;
    document.onmouseup = endDrag;
  }

  function drag(e) {
    const newX = e.clientX;
    const newY = e.clientY;

    node.x += newX - mouse.x;
    node.y += newY - mouse.y;

    mouse.x = e.clientX;
    mouse.y = e.clientY;
    showMenu = false;
  }

  function endDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="node"
  style="top: {node.y - node.size / 2}px; 
  left: {node.x - node.size / 2}px; 
  --size: {node.size}px; 
  --color: {node.color}"
  on:mousedown={(e) => {
    if (e.target.classList.contains("edit")) return;
    showMenu = !showMenu;
  }}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="circle" on:mousedown={initDrag}></div>
  <NodeMenu bind:showMenu bind:node></NodeMenu>
</div>

<style>
  .node {
    position: absolute;
  }

  .circle {
    width: var(--size);
    height: var(--size);
    background-color: var(--color);
    border-radius: 50%;
    cursor: move;
  }
</style>
