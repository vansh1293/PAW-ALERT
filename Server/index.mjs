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
    const apikey = process.env.GOOGLE_API_KEY;
    console.log(apikey);
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=veterinary+clinic&key=${apikey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const placeId = data.results[0].place_id;
            res.json({ placeId });
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
    console.log(process.env.GOOGLE_API_KEY);
});