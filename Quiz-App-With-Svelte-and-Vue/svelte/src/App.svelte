<script lang="ts">
  import Finished from "./components/Finished.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Question from "./components/Question.svelte";
  import { questions } from "./config";
  let question_index = 0;
  $: question = questions[question_index];
  let evaluation: boolean[] = [];
  let finished = false;

  function finish_question(e: CustomEvent<boolean>) {
    evaluation.push(e.detail);
    update_question();
  }

  function update_question() {
    if (question_index < questions.length - 1) {
      question_index++;
    } else {
      finished = true;
    }
  }

  function restart() {
    question_index = 0;
    evaluation = [];
    finished = false;
  }
</script>

<Header />

<Layout>
  {#if !finished}
    <Question on:finish={finish_question} {question}></Question>
  {:else}
    <Finished on:restart={restart} {evaluation}></Finished>
  {/if}
</Layout>
