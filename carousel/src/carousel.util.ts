export const formatPageIndex = (current, count) => {
  if (current <= 0) {
    return current + count * (Math.floor(-current / count) + 1)
  } else {
    return current % count === 0 ? count : current % count
  }
}
