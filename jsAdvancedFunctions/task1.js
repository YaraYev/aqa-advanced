function handleEven() {
    console.log("number is even")
}

function handleOdd() {
    console.log("number is odd")
}

function handleNum(num, pair, notPair) {
    if (typeof num !== "number")
        throw new Error("'num' must be a number")
    if (typeof pair !== "function" || typeof notPair !== "function")
        throw new Error("'pair/notPair' must be a function")

    num % 2 === 0 ? pair() : notPair()
}

handleNum(10, handleEven, handleOdd)
