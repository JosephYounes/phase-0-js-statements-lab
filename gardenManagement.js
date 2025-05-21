let temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}
let newTimeOfDay = "evening";
if (newTimeOfDay === "evening" || newTimeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}
let soilMoistureLevel = 30;
while (soilMoistureLevel < 40) {
  console.log(soilMoisture);
  soilMoisture += 5;
}
console.log(soilMoisture);