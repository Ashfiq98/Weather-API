function searching() {
    const input = document.getElementById('input-weather').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=630c0495854508fc7e8c5a56022123a4`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            allData(data);
        })
        .catch(error => alert("City can't found"))
}

function allData(sample) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherStatus = document.getElementById('status');

    cityName.innerText = sample.name;
    temperature.innerText = sample.main.temp;
    weatherStatus.innerText = sample.weather[0].main;

}