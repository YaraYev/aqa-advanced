const getStarshipsByOwnerId = (ownerID) => {

    const getShipName = (starshipUrl) => {
        return fetch(starshipUrl)
            .then((response) => response.json())
            .then(json => json.name)
    }

    return fetch(`https://swapi.dev/api/people/${ownerID}/`)
        .then((response) => response.json())
        .then((json) => {
            const starshipPromises = json.starships.map(getShipName)

            return Promise.all(starshipPromises)
                .catch((error) => console.error('Ship fetch problem:', error.message))
        })
        .catch((error) => {
            console.error('People fetch problem:', error.message)
        })
}

getStarshipsByOwnerId(14).then(ships => console.log(ships))
