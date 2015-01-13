describe('convertFahrenheitToCelsius', function() {
  it('converts fahrenheit to celsius', function() {
    var fahrenheit = 100;

    var celsiusTemp = convertFahrenheitToCelsius(fahrenheit);

    expect(celsiusTemp).toBeCloseTo(37.778, 3);
  });
});

describe('convertKelvinToCelsius', function() {
  it('converts kelvin to celsius', function() {
    var kelvin = 274;

    var celsiusTemp = convertKelvinToCelsius(kelvin);

    expect(celsiusTemp).toBeCloseTo(0.85, 3);
  });
});

describe('convertCelsiusToFahrenheit', function(){
  it('converts celsius to fahrenheit', function (){
    var celsius = 32;

    var fahrenheitTemp = convertCelsiusToFahrenheit(celsius);

    expect(fahrenheitTemp).toBeCloseTo(0, 3);
  });
});

describe('convertCelsiusToKelvin', function(){
  it('converts celsius to kelvin', function(){
    var celsius = 0;

    var kelvinTemp = convertCelsiusToKelvin(celsius);
    expect(kelvinTemp).toBeCloseTo(273.15, 3);
  });
});

describe('convertFahrenheitToKelvin', function(){
  it('converts fahrenheit to kelvin', function(){
    var fahrenheit = 68;

    var kelvinTemp = convertFahrenheitToKelvin(fahrenheit);
    expect(kelvinTemp).toBeCloseTo(293.15, 3);
  });
});

describe('convertKelvinToFahrenheit', function(){
  it('converts kelvin to fahrenheit', function(){
    var kelvin = 293.15;

    var fahrenheitTemp = convertKelvinToFahrenheit(kelvin);
    expect(fahrenheitTemp).toBeCloseTo(68, 3);
  });
});
