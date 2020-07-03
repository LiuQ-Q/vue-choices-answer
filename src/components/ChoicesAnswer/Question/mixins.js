export const update = {
  props: ["options", "value", "number"],
  watch: {
    answer: {
      deep: true,
      handler(val) {
        this.$emit("input", val);
      }
    },
    value(val) {
      this.answer = val;
    }
  },
  mounted() {
    this.$emit("input", this.answer);
  }
};
