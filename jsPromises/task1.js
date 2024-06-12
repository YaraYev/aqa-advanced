const getPlanets = () => {
    let planets = []

    for (let i = 1; i <= 10; i++) {
        const p = fetch(`https://swapi.dev/api/planets/${i}`)
            .then((response) => response.json())
            .then((json) => json.name)
            .catch((error) => console.log(error))
        planets.push(p)
    }

    Promise.all(planets)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error('Fetch problem:', error)
        })
}
getPlanets()