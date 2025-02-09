// Planet objects with their name, distance from Lumoria, and size
const lumoriaPlanets = [
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Venusia", distance: 0.7, size: 12104 },
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Marsia", distance: 1.5, size: 6779 }
];

// Takes an array of planets and the current index for the planet being evaluated
// and returns the number of planets that cast a shadow on the current planet
function getShadowCount(planets, currentIndex) {
    // Slice the array up to the current index, filter the planets that are larger than the current planet, and return the length of the resulting array
    return planets.slice(0, currentIndex)
        .filter(planet => planet.size > planets[currentIndex].size)
        .length;
}

// Takes the current index and the number of shadows cast on the planet
// and returns the light intensity of the planet
function getLightIntensity(i, shadowCount) {
    /** 
     * RULES
     * - If the planet is the first in the array (closest to the sun), return "Full"
     * - If the planet has one shadow cast on it, return "None"
     * - If the planet has more than one shadow cast on it, return "None (Multiple Shadows)"
     * - Otherwise, return "Partial"
     **/
    if (i === 0) return 'Full';
    if (shadowCount === 1) return 'None';
    if (shadowCount > 1) return 'None (Multiple Shadows)';
    return 'Partial';
}

// Calculates the light intensity of each planet by seeing how many shadows are cast on it from other planets
function calculateLightIntensity(planets) {
    // Map over the array of planets, calculate the shadow count for each planet, 
    // and return an object with the planet name and its light intensity
    return planets.map((planet, i) => {
        const shadowCount = getShadowCount(planets, i);
        let lightIntensity = getLightIntensity(i, shadowCount);
        return { name: planet.name, light: lightIntensity };
    });
}

// Sort the array of planets by distance
const sortedPlanets = lumoriaPlanets.sort((a, b) => a.distance - b.distance);

// Log the light intensity of each planet to the console
console.log(calculateLightIntensity(sortedPlanets));
