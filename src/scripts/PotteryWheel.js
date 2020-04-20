/*
    Purpose to be detirmined
*/

// Initial value of the pottery identifier
let potteryId = 1

// Function to create and define new pottery objects
export const makePottery = (shape, weight, height) => {
    // The pottery object
    const newPottery = {
        potteryId: potteryId,
        shape: shape,
        weight: weight,
        height: height
    }
    // Increment the id of each pottery object
    const addOneId = (id) => {
        potteryId = id + 1
    }
    addOneId(potteryId)
    return newPottery
}