<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Layout from "./components/Layout.vue";
import Finish from "./components/Finish.vue";
import Progress from "./components/Progress.vue";
import { questions } from "./config";
let question_index = ref(0);
let finished = ref(false);

const question = computed(() => questions[question_index.value]);

let evaluaion: boolean[] = [];

function finish_question(correct: boolean) {
  evaluaion.push(correct);
  update_question();
}

function update_question() {
  if (question_index.value < questions.length - 1) {
    question_index.value++;
  } else {
    finished.value = true;
  }
}

function restart() {
  question_index.value = 0;
  evaluaion = [];
  finished.value = false;
}
</script>

<template>
  <Header></Header>
  <Layout>
    <template v-if="!finished">
      <Progress :progress="question_index" :count="questions.length"></Progress>
      <Question @finish="finish_question" :question="question"></Question>
    </template>
    <Finish v-else :evaluaion="evaluaion" @restart="restart"></Finish>
  </Layout>
</template>
