<script setup lang="ts">
const { question } = defineProps<{ question: question }>();
</script>

<template>
  <h2>{{ question.question }}</h2>
</template>
