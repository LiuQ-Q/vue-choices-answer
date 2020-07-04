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
        title: "问答共20道题, 每题5分, 60分以上合格",
        question: questionStore,
        score: {
          single: 20,
          multiple: 20
        },
        number: 5,
        submitText: "确定"
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
