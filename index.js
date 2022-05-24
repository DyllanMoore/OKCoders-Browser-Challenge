function runFetch(city) {
    fetch("https://api.weatherapi.com/v1/current.json?key="
        + "ffa8ad628cae45e89a5235208221605"
        + "&q="
        + city
        + "&aqi=no"
    )
        .then(response => response.json())
        .then((data) => {
            console.log(window)
            if (typeof window !== 'undefined') {
                getCurrentWeather(data, city);
            }
        })
};

function getCurrentWeather(data, city) {
    if (city === "hogwarts") {
        displayCurrentWeatherHogwarts(data)
    };
    if (city === "narnia") {
        displayCurrentWeatherNarnia(data)
    };
    if (city === "rivendell") {
        displayCurrentWeatherRivendell(data);
    }
}

const rivendellButton = document.getElementById("rivendell-button");
const hogwartsButton = document.getElementById("hogwarts-button");
const narniaButton = document.getElementById("narnia-button");

function hogwartsButtonClicked() {
    hogwartsButton.classList.toggle("current");
    rivendellButton.classList.remove("current");
    narniaButton.classList.remove("current");

    runFetch("hogwarts");
}

function narniaButtonClicked() {
    narniaButton.classList.toggle("current");
    hogwartsButton.classList.remove("current");
    rivendellButton.classList.remove("current");

    runFetch("narnia");
}

function rivendellButtonClicked() {
    rivendellButton.classList.toggle("current");
    hogwartsButton.classList.remove("current");
    narniaButton.classList.remove("current");

    runFetch("rivendell");
}

function displayCurrentWeatherHogwarts(data) {
    var weather = data.current;

    const currentTemperatureHogwarts = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentDementors = document.getElementById("extra").innerHTML = `Chance of Dementors: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeedHogwarts = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentCloudsHogwarts = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitationHogwarts = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherConditionHogwarts = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;

    return currentTemperatureHogwarts, currentWindSpeedHogwarts, currentCloudsHogwarts, currentPrecipitationHogwarts, currentWeatherConditionHogwarts, currentDementors;
}

function displayCurrentWeatherNarnia(data) {
    var weather = data.current;

    const currentTemperatureNarnia = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentVisitors = document.getElementById("extra").innerHTML = `Chance of Visitors from Closets: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeedNarnia = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentCloudsNarnia = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitationNarnia = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherConditionNarnia = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;

    return currentTemperatureNarnia, currentWindSpeedNarnia, currentCloudsNarnia, currentPrecipitationNarnia, currentWeatherConditionNarnia, currentVisitors;
}

function displayCurrentWeatherRivendell(data) {
    var weather = data.current;

    const currentTemperatureRivendell = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentFellowships = document.getElementById("extra").innerHTML = `Chance of Fellowships Formings: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeedRivendell = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentCloudsRivendell = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitationRivendell = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherConditionRivendell = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;


    return currentTemperatureRivendell, currentWindSpeedRivendell, currentCloudsRivendell, currentPrecipitationRivendell, currentWeatherConditionRivendell, currentFellowships;
}

