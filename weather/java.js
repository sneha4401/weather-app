const inputBox=document.querySelector('.input-box')
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description')
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind");

const location_not_found=document.querySelector('.location-not-found');

async function checkWeather(city){
const api_key="143451dee18792207810838c8e665f71"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data= await fetch(`${url}`)
.then(response=>
    response.json());


if(weather_data.cod==='404'){
        location_not_found.style.display="flex";
        return;
    }

 temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
 humidity.innerHTML=`${weather_data.main.humidity}`;
 wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`
 description.innerHTML=`${weather_data.weather[0].description}`;


switch(weather_data.weather[0].main){
case 'Clouds':
weather_img.src="https://th.bing.com/th/id/R.f398c68db18f0890c6b5e251cd0bbbf0?rik=zJSnGI8YeVRT%2bA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f10%2fpartly-cloudy-weather-icon_79074.jpg&ehk=xIs%2bpPK0HHQB9Su1oDbZGo6T%2bOnveZHPyQMhyFrZxfc%3d&risl=&pid=ImgRaw&r=0"
break;
case'Clear':
weather_img.src="https://www.bing.com/ck/a?!&&p=63b8adc2791f0028JmltdHM9MTY5MTAyMDgwMCZpZ3VpZD0wYWQ0NDIyOS03NmFkLTZmZTMtMjljNS01MDViNzc1ZjZlODkmaW5zaWQ9NTU2Ng&ptn=3&hsh=3&fclid=0ad44229-76ad-6fe3-29c5-505b775f6e89&u=a1L2ltYWdlcy9zZWFyY2g_cT1jbGVhciB3ZWF0aGVyIGNhcnRvb24mRk9STT1JUUZSQkEmaWQ9QTEzQTdDNjFEQzdEMUMxOUUxRkExRjRCRjFFMUNEQjYwMUI0MUNGOQ&ntb=1"
break;
case'Rain':
weather_img.src="https://th.bing.com/th/id/OIP.Vmy3H5C6YhAxyyb9Zv44UwHaHD?pid=ImgDet&rs=1"
break;
case'Mist':
weather_img.src="https://img.freepik.com/free-vector/forest-scene-with-fullmoon-mist_1308-8628.jpg?size=626&ext=jpg"
break;
case'Snow':
weather_img.src="https://openclipart.org/image/2400px/svg_to_png/214449/Schnee.png"
break;
 }


}


searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

