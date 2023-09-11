<script setup lang="ts">
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Layout from "./components/Layout.vue";
import { questions } from "./config";
let question_index = 0;
const question = questions[question_index];

function finish_question(correct: boolean) {
  window.alert(correct);
}
</script>

<template>
  <Header></Header>
  <Layout>
    <Question @finish="finish_question" :question="question"></Question>
  </Layout>
</template>
