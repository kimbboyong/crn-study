import axios from "axios";
import { useEffect, useState } from "react";
import { CitysData } from "../../CitysData";
import Loading from "../../components/Loading";
import Weather from "../../components/Weather";
import { Select } from "./style";

const GlobalPage = () => {
    const [cityData, setCityData] = useState(null);
    const [userChoiceData, setUserChoiceData] = useState('Seoul');

    const [loadings, setLoadings] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${userChoiceData}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(URL);
                setCityData(response.data);
                setLoadings(false);
            } catch (e) {
                console.error(e);
            } finally {
                setLoadings(false);
            }
        }
        fetchData();
    }, [userChoiceData]);


    return (
        <>
            {
                loadings ?
                    <Loading />
                    : (
                        <>
                            <Select onChange={(e) => { setUserChoiceData(e.target.value) }} value={userChoiceData}>
                                {
                                    CitysData.map((item, idx) =>
                                        <option key={idx} value={item.name}>{item.name}</option>
                                    )
                                }
                            </Select>

                            <Weather
                                title={cityData?.name}
                                img={cityData?.weather[0].icon}
                                imgAnimation={"imgAnimation"}
                                temp={cityData?.main.temp}
                            />
                        </>
                    )

            }

        </>
    )
}

export default GlobalPage;