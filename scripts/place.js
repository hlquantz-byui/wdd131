const temperature = 20; // in °F
const windSpeed = 10; // in mph

const calculateWindChill = (temperature, windSpeed) => Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));

if (temperature <= 50 && windSpeed > 3){
    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById('windChill').textContent = windChill + '°F';
}else{
    document.getElementById('windChill').textContent = 'N/A';
}