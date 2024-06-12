const fetchJson = async (url) => {
    const response = await fetch(url)
    if (!response.ok)
        throw new Error(`Bad response: ${response.status}`)

    return response.json()
}

const showStarshipsByOwnerId = async (ownerID) => {
    const ownerURL = `https://swapi.dev/api/people/${ownerID}/`
    const owner = await fetchJson(ownerURL)
    const starshipsPromises = owner.starships.map(fetchJson)
    const starshipsAll = await Promise.all(starshipsPromises)
    const starshipNames = starshipsAll.map(ship => ship.name)
    return starshipNames
}

(async () => {
    try {
        const names = await showStarshipsByOwnerId(14)
        console.log(names)
    } catch (error) {
        console.error('Error fetching starships:', error.message)
    }
})()