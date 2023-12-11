const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const tempDesc = document.querySelector('#tempDesc');

//Puebla coordinates: 19.05139655337865, -98.1749784861879
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=19.05&lon=-98.17&appid=7b629bb502cec674c5f3d91de617913e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); testing only
            displayResults(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.src = iconsrc;
    weatherIcon.setAttribute('height', 100);
    weatherIcon.setAttribute('width',100);
    tempDesc.textContent = `${desc}`;
}

function displayForecast(data){
    let nextDay = document.getElementById('nextDay');
    let secondDay = document.getElementById('secondDay');
    let thirdDay = document.getElementById('thirdDay');
  
    let nextDayDate = data.list[9].dt_txt;
    let nextDayTemp = data.list[9].main.temp;
    let nextDayDesc = data.list[9].weather[0].description;
    let secondDayDate = data.list[17].dt_txt;
    let secondDayTemp = data.list[17].main.temp;
    let secondDayDesc = data.list[17].weather[0].description;
    let thirdDayDate = data.list[25].dt_txt;
    let thirdDayTemp = data.list[25].main.temp;
    let thirdDateDesc = data.list[25].weather[0].description;
  
    nextDay.innerHTML = `${nextDayDate} Tempeture: ${nextDayTemp}&deg;F ${nextDayDesc}`;

    secondDay.innerHTML = `${secondDayDate} Tempeture: ${secondDayTemp}&deg;F ${secondDayDesc}`;

    thirdDay.innerHTML = `${thirdDayDate} Tempeture: ${thirdDayTemp}&deg;F ${thirdDateDesc}`;
}

apiFetch();