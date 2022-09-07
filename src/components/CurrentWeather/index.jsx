import React,{useEffect,useState} from "react";

//API


export const CurrentWeather = () => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}onecall?lat=51.5073&lon=-0.1277&appid= ${process.env.REACT_APP_API_KEY}`)
            .then(response=> response.json())
            .then(data => setWeather(data))
    }, [])


if(loading){
    return <p> Loading...</p>
}

  return (
    <section className="currentWeather">
      <div className="currentWeather--details">
        <h2>Temp</h2>
        <span>0°</span>
        <ul className="currentWeather--stats">
          <li>
            <span>Wind</span>
            <span>5 km/h</span>
          </li>
          <li>
            <span>Humidity</span>
            <span>23%</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
            <h3>Raining</h3>
        </div>
      </div>
      <div className="currentWeather--imgs">
        <img src="" alt="Weather" />
      </div>
    </section>
  );
};
