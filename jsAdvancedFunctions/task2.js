function rec(num) {
    console.log(num)

    if (num > 0) {
        return rec(num - 1)
    }

}

rec(5)