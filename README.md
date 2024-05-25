# Face Swapping Web Application (Frontend)

This web application allows users to upload two images and swap their faces. It is built using React.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/face-swapping-app.git
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd face-swapping-app/frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open [http://localhost:3000](http://localhost:3000) in your browser to use the application.**

## Features

- **Upload two images**: Users can upload two images.
- **Face Swapping**: The backend API processes the images and swaps the faces.
- **View Results**: Users can view the original and swapped images.

## Project Structure

```
frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── ImageUpload.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
