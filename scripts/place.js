/* T_wc = 13.12 + 0.6215 * T_a - 11.37 * V**0.16 + 0.3965 * T_a * V**0.16
Where:

T_wc is the wind chill temperature (°C),
T_a is the air temperature (°C),
V is the wind speed (km/h).. 
*/

const T = 30; // temperature (°C)
const V = 12; // wind speed (km/h)

/* function calculateWindChill(temperature, windSpeed, isMetric = true){

  //check if inputs meet the conditions
  if((isMetric && temperature <= 10 && windSpeed > 4.8) || 
  (isMetric && temperature <= 10 && windSpeed > 4.8)){
    return "N/A"
  }

  if(isMetric){
    temperature = (temperature - 32) * 5 / 9; // convert Fahrenheit(°F) to Celsius(°C)
    windSpeed = windSpeed * 1.60934;  // mph to km/h
  }

  const windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed **0.16 + 0.3965 * temperature * windSpeed **0.16;
  return windChill.toFixed(2);
} */

//Anonymous function expression
/* const windChill =  function (temperature, windSpeed, isMetric = true){

  //check if inputs meet the conditions
  if((isMetric && temperature <= 10 && windSpeed > 4.8) || 
  (isMetric && temperature <= 10 && windSpeed > 4.8)){
    return "N/A"
  }

  if(isMetric){
    temperature = (temperature - 32) * 5 / 9; // convert Fahrenheit(°F) to Celsius(°C)
    windSpeed = windSpeed * 1.60934;  // mph to km/h
  }

  const windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed **0.16 + 0.3965 * temperature * windSpeed **0.16;
  return windChill.toFixed(2);
}
 */

//Array function expression to calculate Wind Chill
/* const windChill = (temperature, windSpeed, isMetric = true) => (isMetric && (temperature > 10 || windSpeed <= 4.8)) || 
(!isMetric && (temperature > 50 || windSpeed <= 3)) ? "N/A" : isMetric ? 
  (13.12 + 0.6215 * temperature - 11.37 * windSpeed * Math.pow(0.16) + 0.3965 * temperature * windSpeed * Math.pow(0.16))
  :(13.12 + 0.6215 * ((temperature - 32) * 5 / 9) - 11.37 * (windSpeed * 1.60934) 
  * Math.pow(0.16) + 0.3965 * ((temperature - 32) * 5 / 9) * (windSpeed * 1.60934) * Math.pow(0.16)); */


function calculateWindChill(temperature, windSpeed, isMetric = true){
  return (isMetric && (temperature > 10 || windSpeed <= 4.8)) || 
  (!isMetric && (temperature > 50 || windSpeed <= 3)) ? "N/A" : isMetric ? 
    (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2)
    :(13.12 + 0.6215 * ((temperature - 32) * 5 / 9) - 11.37 * Math.pow((windSpeed * 1.60934), 0.16) + 0.3965 
    * ((temperature - 32) * 5 / 9) * Math.pow((windSpeed * 1.60934), 0.16)).toFixed(2);
}

//Select DOM elemet for output
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');
const countryWindChill = document.querySelector('#windChill');

//use the date object
const today = new Date();

let oldLastModify = new Date(document.lastModified);
const windChill = calculateWindChill(20, 12, isMetric = true);
console.log(windChill);

//give content
countryWindChill.textContent = `${windChill}`;
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modified: ${oldLastModify}`;

