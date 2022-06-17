console.log(solution(10));
function solution(limit) {
    let sum = 0;

        for (let i = 0; i < limit; i++)
            if (i % 5 === 0 || i % 3 === 0)
                sum += i;

    return sum;
}