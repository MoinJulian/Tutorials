<script>
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";
  import Question from "./components/Question.svelte";
  import { questions } from "./config";
  let question_index = 0;
  const question = questions[question_index];
</script>


<Header/>

<Layout>
  <Question {question}></Question>
</Layout>
