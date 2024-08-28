let lat;
let long;
const apiKey = "248d369aa6322178f4f2620b2da7f29c";

function startApp()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
            lat=position.coords.latitude;
            long=position.coords.longitude;
            console.log("lat: " , lat ," long: ",long);
            getWeatherData();
        })

    }   
}
function getWeatherData()
{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    console.log(url);
    fetch(url).then(function(response){
        response.json().then(function(data){
            updateWeatherData(data);
        })
    });

}
function updateWeatherData(data)
{
    const temp=data.main.temp;
    const pressure=data.main.pressure;
    const humidity=data.main.humidity;
    const windSpeed=data.wind.speed;
    const cloudsPercentage=data.clouds.all;
    const city=data.name;
    const sunRise=new Date(data.sys.sunrise*1000);
    const sunSet=new Date(data.sys.sunset*1000);
    const imgUrl=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;



    document.getElementById('temp').innerHTML=temp;
    document.getElementById('pressure').innerHTML=pressure;
    document.getElementById('humidity').innerHTML=humidity;
    document.getElementById('windSpeed').innerHTML=windSpeed;
    document.getElementById('cloudsPerc').innerHTML=cloudsPercentage;
    document.getElementById('sunRise').innerHTML=sunRise.getMinutes()<10?sunRise.getHours()+':0'+sunRise.getMinutes():sunRise.getHours()+':0'+sunRise.getMinutes();
    document.getElementById('sunSet').innerHTML=sunSet.getMinutes()<10?sunSet.getHours()+':0'+sunSet.getMinutes():sunSet.getHours()+':'+sunSet.getMinutes();
    document.getElementById('currentWeatherImg').src=imgUrl;
    const locationLink= document.getElementById('locationLink');
    locationLink.innerHTML=city;
    locationLink.href=`https://openstreetmap.org/#map=9/${lat}/${long}`;



}