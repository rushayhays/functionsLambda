// lamda practice
//Rushay Hays 2/16/2022
//NSS

// Define a function named broadCast. It should define a single parameter, whose value
// will be a function.
// Define a function named announceRain that should log this message to the console:
// "Grab an umbrella. It's going to rain today."
// Define a function named announceClear that should log this message to the console:
// "Grab your shades and sunscreen. It's going to be sunny and hot today."
// Define a function named weatherStation. It should define a single parameter,
// whose value will be the day's humidity reading. If the humidity is over 95,
// then the console should display the rainy weather message. 
//If it is below 95, then the sunny weather message should appear.

function braodcast(functParameter) {

}

function announceRain() {
    console.log("Grab an umbrella. It's going to rain today.")
}

function announceClear() {
    console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.")
}

function weatherStation(humidityToday) {
    if(humidityToday > 95) {
        announceRain()
    } else {
        announceClear()
    }
}

braodcast(weatherStation(98));