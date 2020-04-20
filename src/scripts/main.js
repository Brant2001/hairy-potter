// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", ".5lbs", "3in")
let plate = makePottery("plate", ".2lbs", ".5in")
let bowl = makePottery("bowl", "1lbs", "3in")
let vase = makePottery("vase", "3lbs", "3ft")
let urn = makePottery("urn", "6lbs", "2ft")

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedPlate = firePottery(plate, 2500)
const firedBowl = firePottery(bowl, 1500)
const firedVase = firePottery(vase, 5000)
const firedUrn = firePottery(urn, 2150)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list
console.log(firedMug())

