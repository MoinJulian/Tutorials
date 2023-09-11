<script setup>
import Header from "./components/Header.vue";
import { questions } from "./config";
</script>

<template>
  <Header></Header>
  {{ JSON.stringify(questions) }}
</template>
