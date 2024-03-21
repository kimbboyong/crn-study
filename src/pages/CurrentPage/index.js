import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Weather from "../../components/Weather";
import useCurrent from "../../hooks/useCurrent";
import CurrentWeek from "./CurrentWeek";

const CurrentPage = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [loadings, setLoadings] = useState(true);
    const location = useCurrent();

    useEffect(() => {
        const fetchData = async () => {
            if (!location.lat || !location.lon) return;
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric&lang=kr`;
            try {
                const response = await axios.get(URL);
                setWeatherData(response.data);
                setLoadings(false);
            } catch (e) {
                console.error(e);
            } finally {
                setLoadings(false);
            }
        };
        fetchData();
    }, [location]);

    return (
        <>
            {
                loadings ?
                    <Loading /> :
                    <Weather
                        strong={{ fontSize: "30px" }}
                        span={{ fontSize: "30px" }}
                        img={weatherData?.weather[0].icon}
                        imgAnimation={"imgAnimation"}
                        title={weatherData?.name}
                        temp={Math.floor(weatherData?.main.temp)}
                    />
            }
            <CurrentWeek />

        </>
    )
}

export default CurrentPage;