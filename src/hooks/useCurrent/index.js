import { useEffect, useState } from "react";

const useCurrent = ({ onLocationUpdate } = {}) => {

    const [location, setLocation] = useState({ lat: null, lon: null });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setLocation({ lat, lon });
            if (onLocationUpdate) {
                onLocationUpdate({ lat, lon });
            }
        });
    }, [onLocationUpdate])


    return location;
}

export default useCurrent;