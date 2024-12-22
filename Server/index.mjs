import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());

app.get('/api/places', async (req, res) => {
    const { lat, lng } = req.query;
    console.log(lat, lng);
    const apikey = process.env.GOOGLE_API_KEY;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=veterinary+clinic&key=${apikey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            for (const place of data.results) {
                const placeId = place.place_id;
                console.log('Checking place ID:', placeId);

                const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_phone_number,website&key=${apikey}`;
                const placeDetailsResponse = await fetch(placeDetailsUrl);
                const placeDetailsData = await placeDetailsResponse.json();

                if (placeDetailsData.result && placeDetailsData.result.formatted_phone_number) {
                    const formattedPhoneNumber = placeDetailsData.result.formatted_phone_number;
                    return res.json({ formattedPhoneNumber });
                }
            }
        } else {
            res.status(404).json({ error: "No results found" });
        }
    } catch (error) {
        console.error('Error fetching place data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});