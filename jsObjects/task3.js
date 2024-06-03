const car1 = {
    brand: 'Mercedes-Benz',
    model: 'C 250',
    year: 2011
}

const car2 = {
    brand: 'Toyota',
    model: 'Sequoia',
    year: 2021
}

//const car3 = { ...car1, ...car2 }
const car3 = { car1: { ...car1 }, car2: { ...car2 } }

console.log(car3)