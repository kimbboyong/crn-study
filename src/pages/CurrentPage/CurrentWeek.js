import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "../../components/Weather";
import useCurrent from "../../hooks/useCurrent";
import { Wrapper } from "./style/index";

const CurrentWeek = () => {

    const [weekData, setWeekData] = useState(null);
    const location = useCurrent();
    useEffect(() => {
        const fetchData = async () => {
            if (!location.lat || !location.lon) return;

            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
            const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric&lang=kr`;

            try {
                const response = await axios.get(URL);
                const data = response.data.list.filter((item) => item.dt_txt.includes("12:00:00"));
                setWeekData(data.slice(0.5));
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [location]);

    const getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', { weekday: 'long' });
    };

    return (
        <>
            <Wrapper>
                {weekData?.map((item, idx) => (
                    <li key={idx}>
                        <Weather
                            title={getDayOfWeek(item.dt_txt)}
                            img={item.weather[0].icon}
                            temp={Math.floor(item.main.temp)}
                        />
                    </li>
                )
                )}
            </Wrapper>

        </>
    )
}

export default CurrentWeek;