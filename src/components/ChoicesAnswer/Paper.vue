<template>
  <div class="ca-paper">
    <p class="ca-title">{{ options.title }}</p>
    <div
      v-for="(question, index) in questionList"
      :key="index + question.question"
      class="ca-card"
    >
      <component
        :is="questionStyle[question.type].component"
        :options="question"
        :number="index"
        :value="answerList[index]"
        v-model="answerList[index]"
      />
    </div>
    <button class="ca-btn" @click="submit">{{ options.submitText }}</button>
  </div>
</template>

<script>
import QuestionSingle from "./Question/Single";
import QuestionMultiple from "./Question/Multiple";
import dataDraw from "./data-draw.js";

export default {
  name: "Paper",
  props: {
    options: Object
  },
  data() {
    return {
      questionStyle: [
        {
          component: QuestionSingle,
          score: this.options.score.single || 0,
          assert(expect, actual) {
            return expect[0] === actual;
          }
        },
        {
          component: QuestionMultiple,
          score: this.options.score.multiple || 0,
          assert(expect, actual) {
            return (
              expect.length === actual.length &&
              !actual.find(item => expect.indexOf(item) === -1)
            );
          }
        }
      ],
      questionStore: this.options.question,
      answerList: []
    };
  },
  computed: {
    questionList() {
      return dataDraw.draw(this.questionStore, this.options.number);
    }
  },
  methods: {
    submit() {
      const score = this.getScore(
        this.questionList,
        this.assert(this.questionList, this.answerList)
      );

      this.$emit("result", score);
    },

    getScore(questionList, assertionList) {
      return assertionList.reduce((score, assertion, index) => {
        return (
          score +
          (assertion ? this.questionStyle[questionList[index].type].score : 0)
        );
      }, 0);
    },

    assert(questionList, answerList) {
      return questionList.map((question, index) => {
        return this.questionStyle[question.type].assert(
          question.answer,
          answerList[index]
        );
      });
    }
  }
};
</script>

<style></style>
