import { useState } from "react";

const usePlace = () => {
    const [phonenumber, setphonenumber] = useState(null);
    const [errorinplace, setError] = useState(null);

    const getPhoneNumber = async (lat, lng) => {
        setError(null);
        const apikey = import.meta.env.VITE_API_KEY;
        try {
            const response = await fetch(`http://localhost:3000/api/places?lat=${lat}&lng=${lng}`);
            const data = await response.json();
            if (data.formattedPhoneNumber) {
                setphonenumber(data.formattedPhoneNumber);
            } else if (data.error) {
                setError(data.error);
            } else {
                setError("Can't find Clinic Near You.");
            }
        } catch (err) {
            setError("An error occurred while fetching clinic near you.");
        }
    };
    return { phonenumber, errorinplace, getPhoneNumber };
};
export default usePlace;