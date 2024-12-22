import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

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
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const { buffer, originalname } = req.file;

    // Create a readable stream from the buffer
    const stream = cloudinary.v2.uploader.upload_stream(
        {
            resource_type: 'image',  // Specify image resource type
            public_id: animal_reports/${Date.now()}_${originalname},  // Custom public ID
            folder: 'animal_reports/',  // Optional: Cloudinary folder
            format: 'jpg'  // Optional: Image format (JPEG, PNG, etc.)
        },
        (error, result) => {
            if (error) {
                console.error('Error uploading image:', error);
                return res.status(500).json({ error: 'Error uploading image' });
            }
            // Successfully uploaded
            console.log(result);
            res.json({ message: 'Image uploaded successfully!', imageUrl: result.secure_url });
        }
    );

    // Stream the buffer into Cloudinary
    streamifier.createReadStream(buffer).pipe(stream);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
