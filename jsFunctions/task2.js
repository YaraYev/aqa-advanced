function checkAge(age) {
    function isAdult(age) {
        return age >= 18;
    }

    console.log(`Is a person with age ${age} an adult? ${isAdult(age) ? "Yes" : "No"}.`);
}

checkAge(25);
checkAge(15);