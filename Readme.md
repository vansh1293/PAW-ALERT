# 🐾 Paw Alert !

Welcome to Paw Alert, a platform dedicated to making a difference for injured animals by connecting compassionate users with nearby shelters. Together, we can save lives!

---

## 🌟 Features That Make Us Special

### 📝 Report Injured Animals
- Submit a detailed report with:
  - *Image of the injured animal*
  - *Description* of the condition
  - *Location* of the incident

<!-- ### 🛠️ Real-Time Status Updates
- Track the status of your report:
  - *Report Received*
  - *Help Dispatched*
  - *Animal Rescued* 
- Get notifications on progress through email and SMS. -->

<!-- ### 📍 Automatic Location Mapping
- Automatically fetch the user's location for precise shelter notifications. -->

### 📤 Notification System
- Send SMS alerts to the nearest animal shelter, ensuring timely action.

### 📸 Image Hosting with Cloudinary
- Securely store and serve user-uploaded images of injured animals using *Cloudinary*.

### 📞 Twilio Integration
- Ensure shelters are notified instantly via SMS with the help of *Twilio*.

---

## 🛠️ Tech Stack

### *Frontend*
- *React* - For dynamic and responsive UI
- *React Router* - For seamless navigation
- *Tailwind CSS* - For making the site responsive

### *Backend*
- *Node.js* & *Express* - For a robust server-side foundation
- *Twilio API* - For SMS notifications

### *Other Integrations*
- *Cloudinary* - For image hosting and optimization
- *GeoLocation API* - For accurate location mapping
- *Places API* - For fetching the location of the nearest animal shelter/care

---

## 🎯 Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x
- Cloudinary Account
- Twilio Account

### Installation

#### Clone the Repository:
git clone https://github.com/vansh1293/PAW-ALERT.git


#### Install Dependencies:

##### Frontend:
1. cd client
2. npm install


##### Backend:
1. cd server
2. npm install


#### Set Up Environment Variables:
- Create a .env file in the server and client directory with the following:\

- ##### For Client:
  1. VITE_API_KEY=your_google_api_key


- ##### For Server:
  1. PORT=your_port
  2. GOOGLE_API_KEY=your_google_api_key
  3. CLOUDINARY_CLOUD_NAME=your_cloud_name
  4. CLOUDINARY_API_KEY=your_api_key
  5. CLOUDINARY_API_SECRET=your_api_secret
  6. TWILIO_ACCOUNT_SID=your_twilio_sid
  7. TWILIO_AUTH_TOKEN=your_twilio_auth_token
  8. TWILIO_PHONE_NUMBER=your_twilio_phone_number
  9. TEST_PHONE_NUMBER=your_test_number_with_country_code


#### 🔥Start the Development Servers:

##### Frontend:
1. cd client
2. npm run dev


##### Backend:
1. cd server
2. npm run start:dev


<!-- ---

## 🛠️ Features in Progress

### 🛡️ User Authentication
- Secure sign-in and sign-up functionality for shelters and users.

### 📊 Analytics Dashboard
- View reports submitted, rescue stats, and shelter response times.

--- -->

## 🤝 Contributing
We welcome contributions from all animal lovers and developers!

1. Fork the repository.
2. Create a new branch (git checkout -b feature/amazingFeature).
3. Commit your changes (git commit -m 'Add amazingFeature').
4. Push the branch (git push origin feature/amazingFeature).
5. Open a Pull Request.

---

## 💖 Acknowledgments
- *Animal Shelters:* For their incredible work in rescuing animals.
- *Open Source Community:* For the tools and libraries that power this project.
- *Our Users:* For making the world a better place, one report at a time.
- *Coffee:* For fueling the development process. ☕

---

### Made with ❤️ by [Vansh Arora, Devansh Seth, Kartikeya Singh]