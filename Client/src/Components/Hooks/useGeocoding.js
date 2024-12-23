import { useState } from "react";

function useGeocoding() {
    const [error, seterror] = useState(null);
    const getCoordinates = async (address) => {
        seterror(null);
        const apikey = import.meta.env.VITE_API_KEY;
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch coordinates");
            }
            const data = await response.json();
            if (!data.results || data.results.length === 0) {
                throw new Error("No results found for the provided address.");
            }
            const location = data.results[0]?.geometry?.location;
            if (!location) {
                throw new Error("Location geometry data is unavailable.");
            }
            return location;
        } catch (error) {
            seterror(error);
        }
    };
    return { error, getCoordinates };
}

export default useGeocoding;