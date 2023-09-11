<script lang="ts">
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Question from "./components/Question.svelte";
  import { questions } from "./config";
  let question_index = 0;
  const question = questions[question_index];

  function finish_question(e: CustomEvent<boolean>) {
    window.alert(e.detail);
  }
</script>

<Header />

<Layout>
  <Question on:finish={finish_question} {question}></Question>
</Layout>
