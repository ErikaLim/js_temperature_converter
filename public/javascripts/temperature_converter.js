function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
};

function convertKelvinToCelsius(kelvin) {
  console.log(kelvin - 273.15);
  return kelvin - 273.15;
};

function convertCelsiusToFahrenheit(celsius) {
  console.log(celsius-32);
  return (celsius - 32) * 1.8;
};

function convertCelsiusToKelvin(celsius) {
  console.log(celsius + 273.15);
  return celsius + 273.15;
};

function convertFahrenheitToKelvin(fahrenheit) {
  console.log(fahrenheit + 459.67) * (5/9);
  return (fahrenheit + 459.67) * (5/9);
};

function convertKelvinToFahrenheit(kelvin) {
  console.log(kelvin-273.15) * 1.8 + 32;
  return (kelvin-273.15) * 1.8 + 32;
};
