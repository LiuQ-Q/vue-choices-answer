function randomInt(from, to) {
  return from + Math.floor((to - from) * Math.random());
}

export default {
  draw(list, length) {
    const result = [];
    const clone = list.slice(0);

    while (result.length < length) {
      result.push(clone.splice(randomInt(0, clone.length), 1)[0]);
    }

    return result;
  }
};
