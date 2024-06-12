const fetchJson = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Bad fetch connection: ${response.status}`)
    } else
        return response.json()
}

const getPlanetsResidents = async (planet) => {
    const residents = await Promise.all(planet.residents.map(fetchJson))
    return {
        planetName: planet.name,
        residents: residents.map(resident => resident.name)
    }
}

const getAllPlanetsResidentsByFilmId = async (filmID) => {
    const filmURL = `https://swapi.dev/api/films/${filmID}/`
    const filmInfo = await fetchJson(filmURL)
    const planets = await Promise.all(filmInfo.planets.map(fetchJson))
    const residentsPlanets = await Promise.all(planets.map(getPlanetsResidents))
    return residentsPlanets
}

(async () => {
    try {
        const planetResidents = await getAllPlanetsResidentsByFilmId(3)
        console.log(planetResidents)
    } catch (error) {
        console.error('HTML error:', error.message)
    }
})()