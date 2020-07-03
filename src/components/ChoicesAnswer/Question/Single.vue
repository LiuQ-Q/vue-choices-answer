<template>
  <div>
    <p>{{ number + 1 }}. {{ options.question }}</p>
    <!-- {{options.optionList}} -->
    <div v-for="(item, index) in options.optionList" :key="index + item">
      <input
        type="radio"
        :id="`single-${index}`"
        :value="index"
        v-model="answer"
      />
      <label :for="`single-${index}`">{{ item }}</label>
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
