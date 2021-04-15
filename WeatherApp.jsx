import React, { useEffect, useState } from 'react';
import './WeatherApp.scss'

const WeatherApp = () => {

    const[city, setcity] = useState([]);
    const[search, setsearch] = useState('Angul');
    
    useEffect(() =>{
        const fetchApi = async () =>{
               const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=26bad1de49aba2243da7c50c64fb3dce`;
               const response = await fetch(url);
               const resJson = await response.json();
               console.log(resJson);
               setcity(resJson.main);
               
        };
        fetchApi();
    }, [search])

    return (
        <>
        
            <div className='main'>
            
            <div className='search'>
                <input 
                    type='search'
                    className='input_main'
                    onChange={(event) => {
                     setsearch(event.target.value)
                    }}
                    
                />
            </div>
            </div>
            {!city ? (<p>not found</p>)
            :
           (<div className='location'>
                   <h1>
                       {search}
                   </h1>
                   <h2>{city.temp}°C</h2>
                   <div className='max_min'>
                   <h4>Max.Temp {city.temp_max}°C</h4>
                   <h4>::</h4>
                   <h4>Min.Temp {city.temp_min}°C
                   </h4>

                   </div>
                  
               </div>
           )  } 
              
        </>
    )
}

export default WeatherApp
