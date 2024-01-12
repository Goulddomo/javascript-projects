// Initialize Variables below
let date = ("Monday 2019-03-18");
console.log(date)
let time = ("10:05:34 AM");
console.log(time);
let astronautCount = (7);
let astronautStatus = ("ready");
let averageAstronautMassKg = (80.7);
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = (760000);
let shuttleMassKg = (74842.31);
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = (850000);
let fuelTempCelcius = (-225);
let minimumFuelTemp = (-300);
let maximumFuelTemp = (-150);
let fuelLevel = ("100%");
let weatherStatus = ("clear");
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronauts counted");
} else {
    console.log("Astronauts not ready")
    preparedForLiftOff = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts Ready.")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Total Mass ok");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius >= -300 || fuelTempCelcius <= -150) {
    console.log("Fuel Temp ok");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel level ok");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather Status ok");
}
// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff === true) {
    console.log("LIFTOFF");
}
