const button = document.getElementById("searchbtn");
const input = document.getElementById("cityinput");

const cityName = document.getElementById("cityname");      
const cityTime = document.getElementById("weathercondition");
const cityTemp = document.getElementById("temperature");

async function getData(cityName){
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=7ce1fed95ac644828db41438251109&q=${cityName}&aqi=yes`);

    return await promise.json();
}
button.addEventListener("click", async()=>{
    //console.log("input.value");
    const value = input.value;

    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name},${result.location.region}, ${result.location.country}`;
    cityTime.innerText = `Local Time: ${result.location.localtime}`;
    cityTemp.innerText = `Temp: ${result.current.temp_c}°C`;
});