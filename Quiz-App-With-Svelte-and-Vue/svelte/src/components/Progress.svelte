<script lang="ts">
  export let count: number;
  export let progress: number;
</script>

<div class="progress" aria-describedby="progress">
  {#each { length: count } as _, index}
    <div class="bar" class:active={index <= progress} />
  {/each}
</div>
<div id="progress" class="visually-hidden">
  Progress: Question {progress + 1} out of {count}
</div>

<style>
  .progress {
    display: flex;
    gap: 0.25rem;
  }
  .bar {
    flex-grow: 1;
    height: 0.25rem;
    background-color: var(--font-color);
    border-radius: 100vw;
    opacity: 0.1;
  }
  .active {
    opacity: 0.8;
  }
</style>
