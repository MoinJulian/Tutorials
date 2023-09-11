<script lang="ts">
    import { createEventDispatcher } from "svelte";

  export let question: question;
  let selected_index = 0;
  let submmited = false;
  let message = "";
  let correct = false

  const dispatch = createEventDispatcher<{finish: boolean}>();

  function check_answer() {
    submmited = true;
    correct = selected_index == question.correct_answer_index;

    const correct_answer = question.answers[question.correct_answer_index];

    message = correct
      ? "This is correct"
      : "No, the correct answer is: " + correct_answer;
  }

  function next() {
    dispatch("finish", correct)
  }
</script>

<form on:submit|preventDefault={check_answer}>
  <h2>{question.question}</h2>
  <section class="answers">
    {#each question.answers as answer, index}
      <label class="answer" class:selected={index == selected_index}>
        <input
          disabled={submmited}
          type="radio"
          value={index}
          name={question.id}
          bind:group={selected_index}
        />
        <span class="answer_text">
          {answer}
        </span>
      </label>
    {/each}
  </section>
  <menu>
    <button disabled={submmited}>Submit</button>
    {#if submmited}
      <button type="button" on:click={next}>Next</button>
    {/if}
  </menu>
</form>
<div class="message">
  {message}
</div>

<style>
  h2 {
    padding-block: 2rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .answer {
    background-color: var(--answer-color);
    padding: 1rem;
    border-radius: 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .answer.selected {
    background-color: var(--answer-color-selected);
    outline: 0.1rem solid var(--outline-color);
  }

  .answer_text {
    padding-left: 0.5rem;
  }

  menu {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .message {
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }
</style>
