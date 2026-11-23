# 🌍 Wanderlust – Discover Your Next Adventure

**Wanderlust** is a full-stack travel accommodation web application inspired by Airbnb. It allows users to explore places, discover stays, create their own listings, and share experiences through reviews.

The project is built to provide a simple and interactive platform for discovering unique destinations and accommodations.

## ✨ Features

- 🔐 **User Authentication** – Secure user registration and login.
- 🏡 **Create Listings** – Add, edit, and manage accommodation listings.
- 🔍 **Explore Listings** – Browse available properties and destinations.
- ⭐ **Reviews & Ratings** – Share experiences and rate listings.
- 🗺️ **Interactive Maps** – View property locations using Mapbox.
- 📸 **Image Uploads** – Upload and manage listing images using Cloudinary.
- 🛡️ **Authorization** – Only listing owners can manage their listings, and review authors can delete their own reviews.
- 💬 **Flash Messages** – Get feedback for important user actions.
- 📱 **Responsive Design** – User-friendly interface across different screen sizes.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript, EJS, Bootstrap |
| Backend | Node.js, Express.js |
| Database | MongoDB, MongoDB Atlas |
| Authentication | Passport.js |
| Image Storage | Cloudinary |
| Maps & Geocoding | Mapbox |
| Templating | EJS |
| Version Control | Git & GitHub |
| Deployment | Render |

## 📁 Project Structure

```text
Wanderlust/
│
├── controllers/       # Application logic
├── init/              # Database initialization
├── models/            # MongoDB models
├── public/            # CSS, JavaScript and static files
├── routes/            # Application routes
├── utils/             # Utility functions
├── views/             # EJS templates
│
├── .gitignore
├── app.js             # Main application file
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware
├── schema.js          # Validation schemas
├── package.json
└── package-lock.json
```

## ⚙️ Installation & Setup

Follow these steps to run Wanderlust locally.

**1. Clone the repository**

```bash
git clone https://github.com/radhika20rawat-glitch/Wanderlust_project.git
```

**2. Navigate to the project directory**

```bash
cd Wanderlust_project
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

Use the exact Mapbox variable name expected by your application.

**5. Start the application**

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:8080
```

*Make sure your `package.json` contains the appropriate start script and your MongoDB and API credentials are configured.*

## 🔑 Environment Variables

The application requires the following configurations:

- `ATLASDB_URL` – MongoDB Atlas connection string.
- `SECRET` – Session secret.
- `CLOUD_NAME` – Cloudinary cloud name.
- `CLOUD_API_KEY` – Cloudinary API key.
- `CLOUD_API_SECRET` – Cloudinary API secret.
- `MAP_TOKEN` – Mapbox access token (use your code's exact variable name).

**Important:** Never upload your `.env` file or expose private API credentials on GitHub.

## 🚀 Deployment

The application can be deployed using **Render**.

Deployment requires:
- A GitHub repository connected to Render.
- Environment variables configured in Render.
- A working MongoDB Atlas connection.
- Valid Cloudinary and Mapbox credentials.

## 🎯 Project Objective

The objective of Wanderlust is to develop a full-stack accommodation platform that combines modern web technologies with practical features such as authentication, listing management, image uploads, reviews, and interactive maps.

## 🔮 Future Enhancements

- Advanced search and filtering.
- Wishlist and favourite listings.
- Booking and reservation functionality.
- User profile management.
- Payment gateway integration.
- Enhanced location-based recommendations.

## 👩‍💻 Author

**Radhika Rawat**

B.Tech | Computer Science & Engineering (AI & ML)

- GitHub: [@radhika20rawat-glitch](https://github.com/radhika20rawat-glitch)
- LinkedIn: [Connect with me](https://linkedin.com/in/radhika-rawat-9b2128382)

---

⭐ If you find this project interesting, consider giving it a star!

**Built with ❤️ and a passion for learning and building web applications.**
