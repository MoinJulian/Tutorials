<script>
  export let node;
</script>

<div class="node" style="--size: {node.size}">
  <div class="circle" style="width: {node.size}px; height: {node.size}px"></div>
</div>

<style>
  .node {
    position: absolute;
  }

  .circle {
    width: var(--size);
    height: var(--size);
    background-color: black;
  }
</style>
