const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Puebla coordinates: 19.05139655337865, -98.1749784861879
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.05&lon=-98.17&appid=7b629bb502cec674c5f3d91de617913e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = `${data.weather[0].description}`
    
    weatherIcon.setAttribute("src", iconsrc); 
    weatherIcon.setAttribute("alt", desc);
    
    captionDesc.textContent = `${desc}`;
}


apiFetch();