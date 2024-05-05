const arry = [1, 2, 3, 4, 5]

const result = arry.reduce(function (accu, curr) {
    console.log(accu, curr)

    /** 出力結果
     *  1 2
     *  3 3
     *  6 4
     *  10 5
     */

    return accu + curr
})

console.log(result)
// 出力結果 15