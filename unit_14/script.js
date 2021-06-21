// task 1 --------------------  api_id = ebb5cd385c4504799d6a18e2710baad5
const city = document.querySelector('p.package-name'),
    deg = document.querySelector('.price'),
    desc = document.querySelector('.disclaimer'),
    feat = document.querySelector('.features li'),
    btn = document.querySelector('.button-primary');

btn.onclick = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=ebb5cd385c4504799d6a18e2710baad5')
    .then(function (response) { return response.json() })
    .then(function (data) {
        console.log(data);

        city.textContent = data.name;
        deg.innerHTML = Math.round(data.main.temp - 273) + ' &deg;C';
        desc.textContent = data.weather[0].description;
        let img = document.createElement('img');
        img.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
        feat.append(img);
    })
    .catch(function () {
        //
    });

    const a = 4;
    if (a === 4) {
        console.log(true);
    } else {
        console.log(false);
    }
}
