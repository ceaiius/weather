
import React, { useState} from "react";



function App(){
const API_KEY = "d9f1c56b7901584f7233c9a891cd174a";
const [weather, setWeather] = useState([{}]);
const [city, setCity] = useState("");







const getWeather = (event) => {
    if(event.key == "Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&APPID=${API_KEY}`).then(
            response => response.json()).then(
                data=>{
                    setWeather(data);
                    setCity("")
                    
                }
            )
        
            }
}



    return(
        <div className="container">
            <input className="input"
             placeholder="Enter City..."
            onChange={e=>setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            
             />

             {typeof weather.main === "undefined" ? (
                 <div className="welcome">
                     <p>Welcome to weather app! Enter a city</p>
                 </div>
             ):(
                 <div className="weather-data">
                     <p className="city">{weather.name}</p>
                     <p className="temp">{Math.round(weather.main.temp)+"°"}</p>
                     <p className="weather">{weather.weather[0].main}</p>
                   
                                
                 </div>
             )}

             

                
        </div>
    )
}

export default App;