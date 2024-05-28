function divide(numerator, denominator) {

    if (typeof numerator !== "number")
        throw new Error("'numerator' must be a number")
    if (typeof denominator !== "number")
        throw new Error("'denominator' must be a number")
    if (denominator === 0)
        throw new Error("'denominator' must not be a 0")

    return numerator / denominator
}

function checkDivide(numerator, denominator) {
    try {
        let res = divide(numerator, denominator)
        console.log(`Result of dividing ${numerator} and ${denominator} is ${res}`)
    } catch (error) {
        console.log('An error has occured:', error.message);
    } finally {
        console.log("The work has finished")
    }
}

checkDivide(12, 5)
checkDivide("k", 5)
checkDivide(10, 0)
checkDivide(13, "hy")