<template>
  <div class="ca-mutiple">
    <p class="ca-question">{{ number + 1 }}. {{ options.question }}</p>
    <!-- {{options.choiceList}} -->
    <div
      v-for="(item, index) in options.choiceList"
      :key="index + item"
      class="ca-choices"
    >
      <input
        type="checkbox"
        :id="`multiple-${index}`"
        :value="index"
        v-model="answer"
        class="ca-choices-input"
      />
      <label :for="`multiple-${index}`" class="ca-choices-label">
        {{ item }}
      </label>
    </div>
  </div>
</template>

<script>
import { update } from "./mixins.js";

export default {
  name: "question-multiple",
  data() {
    return {
      answer: []
    };
  },
  mixins: [update]
};
</script>
