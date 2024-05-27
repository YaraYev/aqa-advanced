function divide(numerator, denominator) {

    if (typeof numerator !== "number")
        throw new Error("'numerator' must be a number")
    if (typeof denominator !== "number")
        throw new Error("'denominator' must be a number")
    if (denominator === 0)
        throw new Error("'denominator' must not be a 0")

    return numerator / denominator
}

try {
    divide(10, 2)
} catch (error) {
    console.log('An error has occured:', error.message);
} finally {
    console.log("The work has correctly finished")
}

try {
    divide(12, 0)
} catch (error) {
    console.log('An error has occured:', error.message);
} finally {
    console.log("The work has correctly finished")
}

try {
    divide(12, "k")
} catch (error) {
    console.log('An error has occured:', error.message);
} finally {
    console.log("The work has correctly finished")
}