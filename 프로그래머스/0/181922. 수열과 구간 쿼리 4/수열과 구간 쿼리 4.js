function solution(arr, queries) {
    for([s, e, k] of queries) {
        for(let i = s; i < e + 1; i++) {
            if (i % k == 0)
                arr[i]++;
        }
    }
    return arr;
}