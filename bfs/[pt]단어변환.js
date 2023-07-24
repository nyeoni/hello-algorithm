function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let answer = 0;
  const len = words.length;

  const words_obj = {};
  words.forEach(w => (words_obj[w] = false));

  const queue = [];

  queue.push([begin, 0]);

  do {
    const [word, step] = queue.shift();

    if (word === target) return step;
    else {
      for (let i = 0; i < len; i++) {
        const prefix = word.substring(0, i);
        const suffix = word.substring(i + 1);
        const regex = new RegExp(`^${prefix}.{1}${suffix}$`, 'i');

        const next_words = Object.keys(words_obj).filter(w => regex.test(w));

        next_words.forEach(w => {
          queue.push([w, step + 1]);
          delete words_obj[w];
        });
      }
    }
  } while (queue.length);

  return answer;
}
