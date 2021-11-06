import {api} from "../services/api";
import {useEffect, useState} from "react";

function Weather() {
    const [data, setData] = useState()

    const getWeatherByHour = (hour) => {
        return data?.data?.properties?.timeseries[hour]
    }
    
    const getTemperatureData = (timeserie_element) => {
        return timeserie_element?.data?.instant?.details
    }

    const getWeatherIcon = (timeserie_element) => {
        if (timeserie_element) {
            return `../icons/${timeserie_element?.data?.next_1_hours?.summary?.symbol_code}.svg`
        }
    }

    const doCall= () => {
        api.get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.92&lon=10.67 ")
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        doCall()
    }, [])

    return (
        <div>
            <p>Temperatur: {getTemperatureData(getWeatherByHour(0))?.air_temperature}</p>
            <p>Ikonpath: {getWeatherIcon(getWeatherByHour(0))}</p>
        </div>
    );
}

export default Weather;
