// Code your solution in this file
let findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

let fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver.startsWith(name))
}

let matchName = (drivers, name) => {
    return drivers.filter(driver => driver['name'] === name)
}