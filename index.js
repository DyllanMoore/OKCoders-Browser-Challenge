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
                document.getElementsByClassName("weather").innerHTML = getCurrentWeather(data);
            }
        })

    function getCurrentWeather(data) {
        if (city = "hogwarts") {
            displayCurrentWeatherHogwarts(data)
        };
        if (city = "narnia") {
            displayCurrentWeatherNarnia(data)
        };
        if (city = "rivendell") {
            displayCurrentWeatherRivendell(data);
        }
    }
};

const rivendellButton = document.getElementById("rivendell-button");
const hogwartsButton = document.getElementById("hogwarts-button");
const narniaButton = document.getElementById("narnia-button");

function hogwartsButtonClicked() {
    const current = document.getElementById("hogwarts-button");
    current.classList.toggle("current");

    runFetch("hogwarts");
}

function narniaButtonClicked() {
    const current = document.getElementById("narnia-button");
    current.classList.toggle("current");

    runFetch("narnia");
}

function rivendellButtonClicked() {
    const current = document.getElementById("rivendell-button");
    current.classList.toggle("current");

    runFetch("rivendell");
}

function displayCurrentWeatherHogwarts(data) {
    const weather = data.current;

    const currentTemperature = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentDementors = document.getElementById("extra").innerHTML = `Chance of Dementors: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeed = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentClouds = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitation = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherCondition = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;

    return currentTemperature, currentWindSpeed, currentClouds, currentPrecipitation, currentWeatherCondition, currentDementors;
}

function displayCurrentWeatherNarnia(data) {
    const weather = data.current;

    const currentTemperature = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentDementors = document.getElementById("extra").innerHTML = `Chance of Dementors: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeed = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentClouds = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitation = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherCondition = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;

    return currentTemperature, currentWindSpeed, currentClouds, currentPrecipitation, currentWeatherCondition, currentDementors;
}

function displayCurrentWeatherRivendell(data) {
    const weather = data.current;

    const currentTemperature = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentDementors = document.getElementById("extra").innerHTML = `Chance of Dementors: ${Math.floor(Math.random() * 100)} %`;
    const currentWindSpeed = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentClouds = document.getElementById("clouds").innerHTML = `Cloud Cover: ${weather.cloud}%`;
    const currentPrecipitation = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentWeatherCondition = document.getElementById("descriptor").innerHTML = ` The weather is ${weather.condition.text}.`;

    return currentTemperature, currentWindSpeed, currentClouds, currentPrecipitation, currentWeatherCondition, currentDementors;
}

