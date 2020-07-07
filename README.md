# vue-choices-answer

This is a Vue choices and answer component. Support single and multiple. Help you random select questions and calculate score.

## Install

```
npm install vue-choices-answer

yarn add vue-choices-answer
```

## Usage

index.js

```
import choicesAnswer from "vue-choices-answer";
import Vue from "vue";

Vue.use(choicesAnswer);
```

data.json

```
[
  {
    "type": 0, // single
    "question": "100 + 100 = ?",
    "choiceList": [ // choices
      "100",
      "200",
      "300"
    ],
    "answer": [
      1 // index of correct answer
    ]
  },
  {
    "type": 1, // multiple
    "question": "? < 1000",
    "choiceList": [
      "100",
      "200",
      "300",
      "400"
    ],
    "answer": [
      0,1,2,3
    ]
  }
]
```

a.vue

```
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
        title: "问答共5道题, 每题20分, 60分以上合格",
        question: questionStore,
        score: {
          single: 20,
          multiple: 20
        },
        number: 5, // the number of question, questionStore need to be enough
        submitText: "确定" // text of submit button
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
```

## Style

You can change style from class in elements