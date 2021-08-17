'use strict';

const key = 'bea1ef37a31e4f89ac4102550211508';
const url = 'https://api.weatherapi.com/v1/current.json?key=bea1ef37a31e4f89ac4102550211508&q=iasi&aqi=yes';
const form = document.querySelector('[data-form]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const input = e.target.elements.city.value;
  const result = document.querySelector('[data-result]');
  const img = document.querySelector('[data-weather-icon]');
  const box = document.querySelector('.weather-box');

  const details = document.querySelector('[data-details]');

  fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`)
    .then((response) => response.json())
    .then((responseJson) => {
      result.innerText = responseJson.current.temp_c + ' °C';
      img.style.display = 'inline';
      img.src = responseJson.current.condition.icon;
      details.innerText = responseJson.current.condition.text;
    });
}
