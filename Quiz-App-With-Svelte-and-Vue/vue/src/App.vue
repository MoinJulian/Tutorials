<script setup>
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Layout from "./components/Layout.vue";
import { questions } from "./config";
let question_index = 0;
const question = questions[question_index];
</script>

<template>
  <Header></Header>
  <Layout>
    <Question :question="question"></Question>
  </Layout>
</template>
