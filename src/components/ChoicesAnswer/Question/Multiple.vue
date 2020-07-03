<template>
  <div>
    <p>{{ number + 1 }}. {{ options.question }}</p>
    <!-- {{options.optionList}} -->
    <div v-for="(item, index) in options.optionList" :key="index + item">
      <input
        type="checkbox"
        :id="`multiple-${index}`"
        :value="index"
        v-model="answer"
      />
      <label :for="`multiple-${index}`">{{ item }}</label>
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
