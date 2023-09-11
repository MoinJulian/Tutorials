<script setup lang="ts">
import { ref } from "vue";
const { question } = defineProps<{ question: question }>();
let selected_index = ref(0);

function check_answer() {
  const is_correct = selected_index.value == question.correct_answer_index;

  window.alert(is_correct);
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
          :name="question.id"
          v-model="selected_index"
        />
        <span class="answer_text">
          {{ answer }}
        </span>
      </label>
    </sectio>
    <menu>
      <button>Submit</button>
    </menu>
  </form>
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
