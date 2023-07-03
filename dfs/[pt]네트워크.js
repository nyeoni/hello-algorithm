function solution(n, computers) {
    let answer = 0
    const graph = Array.from(Array(n), () => Array()) // 연결을 나타내는 인접리스트 작은수 -> 큰 수
    const ch = Array(n).fill(false) // 네트워크에 속했는지 여부 확인 용도

    // graph 인접리스트로 표현하기
    for (let i = 0; i < n; i++) {
        computers[i].forEach((isConneted, j) => {
            if (i !== j && isConneted) {
                graph[i].push(j)
            }
        })
    }

    // dfs
    function dfs(v) {
        ch[v] = true
        if (graph[v].length) {
            for (const nv of graph[v]) {
                if (ch[nv] === false) dfs(nv)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (ch[i] === false) {
            dfs(i);
            answer++;
        }
    }

    return answer
}