const computeTime = (progressValue) => {
  let minutes = Math.floor(progressValue / 60);
  let second = progressValue % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  return { minutes, second };
};
export { computeTime };
