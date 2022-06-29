let input=document.querySelector('.city-input');
let weatherData = document.querySelector('.weather-data');
let btn=document.querySelector('.btn-search');
btn.addEventListener('click', () => {
  displayWeather();
})

document.addEventListener('keypress', (event) => {
 if(event.keyCode === 13) {
   displayWeather();
 }
})

const renderLoader = () => {
  let loader = `
  <div class="d-flex justify-content-center m-2">
   <div class="spinner-border spinner " role="status"> 
    <span class="sr-only">loading..</span> 
   </div>
  </div>
  `;
  weatherData.insertAdjacentHTML('beforebegin', loader)
}

const clearLoder = () => {
  let spinner = document.querySelector('.spinner');
  if(spinner) {
    spinner.parentElement.removeChild(spinner);
  }
}

function displayWeather() {
  let place = input.value;
  console.log(place);

  let api="https://api.openweathermap.org/data/2.5/find?q=" + place +"&units=metric&appid=850cac4c51c8a61b959dfe0593e8cb07";
  console.log(api);
  renderLoader();
  fetch(api)
  .then(response=>{
    data=response.json();
    return data;
  })
  .then(data=>{
    console.log(data);
    clearLoder();

    let temp=data.list[0].main.feels_like;
    let weather=data.list[0].weather[0].description;
    let windSpeed=data.list[0].wind.speed;
    let maxTemp=data.list[0].main.temp_max;
    let minTemp=data.list[0].main.temp_min;
    let humidity=data.list[0].main.humidity;
    let pressure=data.list[0].main.pressure;


    document.querySelector('.temp').textContent=temp;
    document.querySelector('.weather').textContent=weather;
    document.querySelector('.wind-speed').textContent=windSpeed + "kph";
    


  })

}
