<script lang="ts">
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Question from "./components/Question.svelte";
  import { questions } from "./config";
  let question_index = 0;
  $: question = questions[question_index];
  const evaluation: boolean[] = [];

  function finish_question(e: CustomEvent<boolean>) {
    evaluation.push(e.detail);
    update_question();
  }

  function update_question() {
    if(question_index < questions.length - 1 ) {
      question_index++;
    }else {
      window.alert("FINISHED")
    }
  }
</script>

<Header />

<Layout>
  <Question on:finish={finish_question} {question}></Question>
</Layout>
