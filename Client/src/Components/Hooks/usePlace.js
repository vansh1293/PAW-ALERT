import { useState } from "react";

const usePlace = () => {
    const [errorinplace, setError] = useState(null);

    const getPhoneNumber = async (lat, lng) => {
        setError(null);
        try {
            const response = await fetch(`http://localhost:3000/api/places?lat=${lat}&lng=${lng}`);
            const data = await response.json();
            if (data.formattedPhoneNumber) {
                return data.formattedPhoneNumber;
            } else if (data.error) {
                setError(data.error);
            } else {
                setError("Can't find Clinic Near You.");
            }
        } catch (err) {
            setError("An error occurred while fetching clinic near you.");
        }
    };
    return { errorinplace, getPhoneNumber };
};
export default usePlace;