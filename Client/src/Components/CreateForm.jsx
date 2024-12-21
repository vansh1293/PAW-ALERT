import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateForm = () => {
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        description: ''
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };
    const validName = /^[a-zA-Z\s.'-]+$/;
    const validPhone = /^\d{10}$/;
    const validLocation = /^[a-zA-Z0-9\s.,'-]+$/;
    const validDescription = /^[a-zA-Z0-9\s.,'-]+$/;
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, phone, location, description } = formData;
        if (!name.trim() || !phone.trim() || !location.trim() || !description.trim()) {
            toast.warn('Please fill in all the required fields.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
        if (!validName.test(name)) {
            toast.warn('Please enter a valid Name.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
        if (!validPhone.test(phone)) {
            toast.warn('Please enter a valid Phone Number.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
        if (!validLocation.test(location)) {
            toast.warn('Please enter a valid Location.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
        if (!validDescription.test(description)) {
            toast.warn('Please enter a valid Description.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
        if (!image) {
            toast.warn('Please upload an image.', {
                position: "top-right", autoClose: 3000, closeOnClick: true
            });
            return;
        }
    }
    return (
        <div className="overflow-y-auto w-full bg-gradient-to-tr from-black via-gray-800 to-violet-900 p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-violet-700">Save a Life</h1>
            <p className="text-sm md:text-base text-gray-200 mb-8">
                Paw Alert is a web application that allows users to report an animal in need of rescue or adoption.
                By submitting a report, users can share their details, location, and any additional information they may have.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-200 font-semibold mb-2">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-200 font-semibold mb-2">Location:</label>
                    <input
                        type="text"
                        id="location"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-200 font-semibold mb-2">Description:</label>
                    <textarea
                        id="description"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        rows="4"
                        placeholder="Describe the animal and its condition"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-200 font-semibold mb-2">Upload an Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        onChange={handleImageChange}
                    />
                </div>
                {image && (
                    <div className="mb-4">
                        <p className="text-gray-200">Image Preview:</p>
                        <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-auto mt-2" />
                    </div>
                )}
                <button
                    type="submit"
                    className=" text-white py-2 px-4 rounded-md bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800 font-bold shadow-lg transform transition-all duration-500 ease-in-out hover:brightness-110 hover:animate-pulse active:animate-bounce w-full"
                >
                    Submit Report
                </button>
            </form>
        </div>
    )
}

export default CreateForm;
