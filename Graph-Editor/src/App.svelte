<script>
  let nodes = [];

  function createNode(e) {
    const node = {
      x: e.clientX,
      y: e.clientY,
      size: 30,
      color: "#ff0000",
    };

    nodes.push(node);

    console.log(nodes);
  }
</script>

<main on:click={createNode}></main>

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
