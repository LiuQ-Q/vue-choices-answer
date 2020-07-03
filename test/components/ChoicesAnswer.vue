<template>
  <div>
    <ca :options="options" @result="getResult" />
  </div>
</template>

<script>
import questionStore from "../data.json";

export default {
  data() {
    return {
      options: {
        title: "考试",
        question: questionStore,
        score: {
          single: 20,
          multiple: 20
        },
        number: 5
      }
    };
  },
  methods: {
    getResult(score) {
      console.log(score);
    }
  }
};
</script>

<style></style>
