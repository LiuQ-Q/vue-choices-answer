<template>
  <div class="ca-single">
    <p class="ca-question">{{ number + 1 }}. {{ options.question }}</p>
    <!-- {{options.choiceList}} -->
    <div
      v-for="(item, index) in options.choiceList"
      :key="index + item"
      class="ca-choices"
    >
      <input
        type="radio"
        :id="`single-${index}`"
        :value="index"
        v-model="answer"
        class="ca-choices-input"
      />
      <label :for="`single-${index}`" class="ca-choices-label">
        {{ item }}
      </label>
    </div>
  </div>
</template>

<script>
import { update } from "./mixins.js";

export default {
  name: "question-single",
  data() {
    return {
      answer: -1
    };
  },
  mixins: [update]
};
</script>
