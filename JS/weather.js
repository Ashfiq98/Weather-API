const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherStatus = document.getElementById('status');
const imageView = document.getElementById('image');

function searching() {
    let input = document.getElementById('input-weather').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=630c0495854508fc7e8c5a56022123a4`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            allData(data);
        })
        .catch(error => {
            const icon = 'https://static.vecteezy.com/system/resources/previews/027/669/104/non_2x/looking-on-city-from-terrace-black-white-error-404-flash-message-woman-under-umbrella-monochrome-website-landing-page-ui-design-not-found-cartoon-dreamy-vibes-flat-outline-illustration-vector.jpg';

            imageView.src = icon;

            cityName.innerText = "Invalid city name ! ! !";
            temperature.innerText = "";
            weatherStatus.innerText = "";
            cityName.style.color = '#f07848'

        })
    document.getElementById('input-weather').value = "";
}

function allData(sample) {
    cityName.innerText = sample.name;
    temperature.innerText = sample.main.temp + ' °C';
    weatherStatus.innerText = sample.weather[0].main;
    imageView.src = "https://openweathermap.org/img/wn/" + sample.weather[0].icon + '.png';
    cityName.style.color = '#0ec06a';

    console.log(sample)
}