function solution(s, e) {
  const dx = [5, -1, 1];
  const queue = [];

  queue.push([s, 0]); // pos, step
  while (queue.length) {
    const [pos, step] = queue.shift();

    if (pos === e) {
      console.log(pos, step);
      return step;
    }
    for (let i = 0; i < dx.length; i++) {
      queue.push([pos + dx[i], step + 1]); // step++ 이렇게 넣으면 어떻게 되는거지?
      console.log(queue);
    }
  }
}

console.log(solution(8, 3));
console.log(solution(5, 14));
