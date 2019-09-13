"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    // use to check if it's fetching input value
    // console.log(searchCity.value);

    var cityName = searchCity.value;
    if(cityName.trim().length == 0){
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apiKey = 'YOUR OPEN WEATHERMAP API KEY HERE';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units~metric&appid=' + apiKey;
    
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
            // successful case
            var data = JSON.parse(http.responseText);

            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;

            console.log(weatherData);
            updateWeather(weatherData);

        } else if (http.readyState == XMLHttpRequest.DONE){
            // fail case
            alert('Something went wrong!');
        }
    };

    http.send();
}

function updateWeather(weatherData){
    weatherCity.textContent = weatherData.cityName;
    // console.log('city loaded');
    weatherDesc.textContent = weatherData.description;
    // console.log('city description loaded');
    weatherTemp.textContent = weatherData.temperature;
    // console.log('city temperature loaded');

    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}
