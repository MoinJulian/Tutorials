<script setup lang="ts">
const { evaluaion } = defineProps<{ evaluaion: boolean[] }>();

const count = evaluaion.length;
const correct_count = evaluaion.filter((x) => x).length;
</script>

<template>
  <h2>The quiz is finished</h2>
  <p>
    Out of {{ count }} questions you answered {{ correct_count }} correctly.
  </p>
  <menu>
    <button>Start over</button>
  </menu>
</template>

<style scoped>
p {
  font-size: 1.25rem;
  padding-block: 2rem 1.5rem;
}
</style>
