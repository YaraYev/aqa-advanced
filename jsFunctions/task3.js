function checkOrder(ordered, available) {

    if (ordered === 0)
        console.log("Your order is empty.")
    else if (ordered > available)
        console.log("Your order is too large, we don’t have enough goods.")
    else
        console.log("Your order is accepted.")
}

checkOrder(5, 10)