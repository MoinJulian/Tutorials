<script>
  import Node from "./lib/components/Node.svelte";
  let nodes = [];

  function createNode(e) {
    const node = {
      x: e.clientX,
      y: e.clientY,
      size: 30,
      color: "#ff0000",
    };

    nodes = [...nodes, node];
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main on:click={createNode}>
  {#each nodes as node}
    <Node {node} />
  {/each}
</main>

<style>
  ::global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  main {
    min-height: 100vh;
    position: relative;
  }
</style>
