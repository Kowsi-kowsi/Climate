const cityInput = document.getElementById('city-name');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherDataDiv = document.getElementById('weather-data');
const cityElement = document.getElementById('city');
const weatherDescriptionElement = document.getElementById('weather-description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        // Mock weather data for demonstration purposes
        const weatherData = {
            city: city,
            weatherDescription: 'Sunny',
            temperature: '25°C',
            humidity: '60%',
            windSpeed: '10 km/h'
        };

        cityElement.textContent = weatherData.city;
        weatherDescriptionElement.textContent = weatherData.weatherDescription;
        temperatureElement.textContent = `Temperature: ${weatherData.temperature}`;
        humidityElement.textContent = `Humidity: ${weatherData.humidity}`;
        windSpeedElement.textContent = `Wind Speed: ${weatherData.windSpeed}`;

        weatherDataDiv.style.display = 'block';
    }
});

