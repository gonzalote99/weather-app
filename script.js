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
  
}
