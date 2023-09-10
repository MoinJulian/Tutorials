<script>
  export let node;
</script>

<div
  class="node"
  style="top: {node.y - node.size / 2}px; 
  left: {node.x - node.size / 2}px; 
  --size: {node.size}px; 
  --color: {node.color}"
>
  <div class="circle"></div>
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
  }
</style>
