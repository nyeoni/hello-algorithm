function solution(arr) {
  // [6, 5, 3, 1, 0]
  const n = arr.length;
  const citations = [...arr, -1];
  citations.sort((a, b) => b - a);
  // console.log(citations)

  for (let h = citations[0]; h > 0; h--) {
    // console.log('h', h)
    let cnt = citations.findIndex(c => c < h);

    // console.log('cnt', cnt)
    if (cnt >= h) return h;
  }
  return 0;
}
