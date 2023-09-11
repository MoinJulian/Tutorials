<script setup lang="ts">
import { ref } from "vue";
const { question } = defineProps<{ question: question }>();
let selected_index = ref(0);
let submitted = ref(false);
let message = ref("");

function check_answer() {
  submitted.value = true;
  const is_correct = selected_index.value == question.correct_answer_index;

  const correct_answer = question.answers[question.correct_answer_index];

  message.value = is_correct
    ? "This is correct!"
    : "No, the correct answer is: " + correct_answer;
}

function next() {
  //TODO
  window.alert("Next");
}
</script>

<template>
  <form @submit.prevent="check_answer">
    <h2>{{ question.question }}</h2>
    <sectio class="answers">
      <label
        class="answer"
        v-for="(answer, index) in question.answers"
        :class="{ selected: index == selected_index }"
      >
        <input
          type="radio"
          :value="index"
          :disabled="submitted"
          :name="question.id"
          v-model="selected_index"
        />
        <span class="answer_text">
          {{ answer }}
        </span>
      </label>
    </sectio>
    <menu>
      <button :disabled="submitted">Submit</button>
      <button @click="next" type="button" v-if="submitted">Next</button>
    </menu>
  </form>
  <div class="message">
    {{ message }}
  </div>
</template>

<style scoped>
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
