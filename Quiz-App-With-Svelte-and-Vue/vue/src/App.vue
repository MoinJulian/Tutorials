<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Layout from "./components/Layout.vue";
import { questions } from "./config";
let question_index = ref(0);
const question = computed(() => questions[question_index.value]);

const evaluaion: boolean[] = [];

function finish_question(correct: boolean) {
  evaluaion.push(correct);
  update_question();
}

function update_question() {
  if (question_index.value < questions.length - 1) {
    question_index.value++;
  } else {
    window.alert("FINISHED");
  }
}
</script>

<template>
  <Header></Header>
  <Layout>
    <Question @finish="finish_question" :question="question"></Question>
  </Layout>
</template>
