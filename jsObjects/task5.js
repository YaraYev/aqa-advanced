const users = [
    {
        name: 'Rob', email: 'rb@gmail.com', age: 30, city: 'LA'
    },
    {
        name: 'Meg', email: 'mg@gmail.com', age: 25, city: 'NY'
    },
    {
        name: 'Lion', email: 'li@gmail.com', age: 31, city: 'MA'
    },
    {
        name: 'Kara', email: 'ka@gmail.com', age: 32, city: 'BO'
    }
]

for (const user of users) {
    const { name, email, age, city } = user

    console.log(`Name: ${name}, e-mail: ${email}, age: ${age}, city: ${city}.`)
}