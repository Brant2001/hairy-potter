/*
    This module is responsible for a function that 
    will act as a kiln to fire the pottery
*/

// A function that will take a created pot as input and add values to it according to the temp and weight
export const firePottery = (currentPot, temperature) => {
    currentPot.fired = true
    if (temperature > 2200) {
        currentPot.cracked = true
    } else if (temperature <= 2200) {
        currentPot.cracked = false
    }
}