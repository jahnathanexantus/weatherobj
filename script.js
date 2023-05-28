class WeatherApp {
    constructor() {
    this.submitBtn = document.getElementById('submitt-Btn');
    this.resetBtn = document.getElementById('rstBtn');
    this.tdyDate = document.getElementById('tdyDate');
    this.tdyTemperature = document.getElementById('tdyTemperature');
    this.tdyWind = document.getElementById('tdyWind');
    this.tdyHumidity = document.getElementById('tdyHumidity');
    this.tdyUv = document.getElementById('tdtUv');
    this.day1Temp = document.getElementById('day1Temp');
    this.day1Wind = document.getElementById('day1Wind');
    this.day1Hum = document.getElementById('day1Hum');
    this.day2Temp = document.getElementById('day2Temp');
    this.day2Wind = document.getElementById('day2Wind');
    this.day2Hum = document.getElementById('day2Hum');
    this.day3Temp = document.getElementById('day3Temp');
    this.day3Wind = document.getElementById('day3Wind');
    this.day3Hum = document.getElementById('day3Hum');
    this.day4Temp = document.getElementById('day4Temp');
    this.day4Wind = document.getElementById('day4Wind');
    this.day4Hum = document.getElementById('day4Hum');
    
    this.submitBtn.addEventListener('click', this.searchBar.bind(this));
    this.resetBtn.addEventListener('click', this.reset.bind(this));
    }
    
    getLocation(lat, lon) {
    let urlLoc = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=bf427759ff67094eeac5d4fe62785bc5`;
    fetch(urlLoc)
        .then(response => response.json())
        .then(locData => {
        console.log(locData);
        this.tdyTemperature.innerHTML = "temperature:" + locData.current.temp;
        this.tdyWind.innerHTML = "wind:" + locData.current.wind_speed;
        this.tdyHumidity.innerHTML = "humidity:" + locData.current.humidity;
        this.tdyUv.innerHTML = "uvi:" + locData.current.uvi;
        this.day1Temp.innerHTML = "temperature:" + locData.daily[1].temp.day;
        this.day1Wind.innerHTML = "wind:" + locData.daily[1].wind_speed;
        this.day1Hum.innerHTML = "humidity:" + locData.daily[1].humidity;
        this.day2Temp.innerHTML = "temperature:" + locData.daily[2].temp.day;
        this.day2Wind.innerHTML = "wind:" + locData.daily[2].wind_speed;
        this.day2Hum.innerHTML = "humidity:" + locData.daily[2].humidity;
        this.day3Temp.innerHTML = "temperature:" + locData.daily[3].temp.day;
        this.day3Wind.innerHTML = "wind:" + locData.daily[3].wind_speed;
        this.day3Hum.innerHTML = "humidity:" + locData.daily[3].humidity;
        this.day4Temp.innerHTML = "temperature:" + locData.daily[4].temp.day;
        this.day4Wind.innerHTML = "wind:" + locData.daily[4].wind_speed;
        this.day4Hum.innerHTML = "humidity:" + locData.daily[4].humidity;
        });
    }
    
    getCityName(cityName) {
        let weatherApi = `https://api.openweathermap.org/geo/1.0/direct?=&q=${cityName}&appid=bf427759ff67094eeac5d4fe62785bc5`;
        fetch(weatherApi)
        .then((response) => { return response.json()})
        .then((weatApi) => {
        console.log(weatApi);
        let lat = weatApi[0].lat;
        let lon = weatApi[0].lon;
        console.log(lat, lon);
        this.getLocation(lat, lon);
        });
        }
        
        searchBar(event) {
        event.preventDefault();
        let citySearch = document.getElementById("citySearch");
        let userInput = citySearch.value.trim();
        console.log(userInput);
        this.getCityName(userInput);
        }
        
        reset() {
        this.tdyTemperature.innerHTML = "temperature:";
        this.tdyWind.innerHTML = "wind:";
        this.tdyHumidity.innerHTML = "humidity:";
        this.tdyUv.innerHTML = "uvi:";
        citySearch.value = "";
        this.day1Temp.innerHTML = "temperature:";
        this.day1Wind.innerHTML = "wind:";
        this.day1Hum.innerHTML = "humidity:";
        this.day2Temp.innerHTML = "temperature:";
        this.day2Wind.innerHTML = "wind:";
        this.day2Hum.innerHTML = "humidity:";
        this.day3Temp.innerHTML = "temperature:";
        this.day3Wind.innerHTML = "wind:";
        this.day3Hum.innerHTML = "humidity:";
        this.day4Temp.innerHTML = "temperature:";
        this.day4Wind.innerHTML = "wind:";
        this.day4Hum.innerHTML = "humidity:";
        }
        }
        
        const weatherApp = new WeatherApp();