<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Layout from "./components/Layout.vue";
import Finish from "./components/Finish.vue";
import { questions } from "./config";
let question_index = ref(0);
let finished = ref(false);

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
    finished.value = true;
  }
}
</script>

<template>
  <Header></Header>
  <Layout>
    <Question
      v-if="!finished"
      @finish="finish_question"
      :question="question"
    ></Question>
    <Finish v-else :evaluaion="evaluaion"></Finish>
  </Layout>
</template>
