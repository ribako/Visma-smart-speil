import {api} from "../services/api";
import {useEffect, useState} from "react";

function Weather() {
    const [data, setData] = useState()

    const doCall= () => {
        api.get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0")
            .then(data => {
                console.log(data);
                setData(data)
            })
    }

    useEffect(() => {
        doCall()
    }, [])

    return (
        <>{data?.data?.type}</>
    );
}

export default Weather;
