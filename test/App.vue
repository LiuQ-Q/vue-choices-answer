<template>
  <div>
    <component :is="ChoicesAnswer" />
  </div>
</template>

<script>
import ChoicesAnswer from "./components/ChoicesAnswer";

export default {
  name: "App",
  data() {
    return {
      ChoicesAnswer
    };
  }
};
</script>

<style></style>
