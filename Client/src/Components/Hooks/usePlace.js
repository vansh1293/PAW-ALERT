import { useState } from "react";

const usePlace = () => {
    const [placeid, setPlaceid] = useState(null);
    const [errorinplace, setError] = useState(null);

    const getPlace = async (lat, lng) => {
        setError(null);
        const apikey = import.meta.env.VITE_API_KEY;
        try {
            const response = await fetch(`http://localhost:3000/api/places?lat=${lat}&lng=${lng}`);
            const data = await response.json();

            if (data.placeId) {
                setPlaceid(data.placeId);  // Store the placeId in state
            } else {
                setError("No clinic found.");
            }
        } catch (err) {
            console.error('Error fetching place data:', err);
            setError("An error occurred while fetching place data.");
        }
    };
    return { placeid, errorinplace, getPlace };
};
export default usePlace;