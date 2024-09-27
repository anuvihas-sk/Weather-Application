# Weather Application

## Overview
This Weather Application is built with Node.js and Express.js, allowing users to fetch and display current weather data for any location. It utilizes a third-party weather API to retrieve weather information and presents it in a user-friendly interface. This README provides installation instructions, usage guidelines, and features of the application.

## Features
- Fetch current weather data by city name.
- Display temperature, humidity, wind speed, and weather conditions.
- Responsive design for optimal viewing on desktop and mobile devices.
- Error handling for invalid city names and API errors.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node package manager)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   In the root directory, create a `.env` file and add your weather API key:
   ```plaintext
   WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage
1. **Enter a City Name:** Type the name of the city for which you want to know the weather in the input field.
2. **Fetch Weather Data:** Click the "Get Weather" button to retrieve and display the current weather information.
3. **View Results:** The application will display the temperature, humidity, wind speed, and weather conditions for the specified city.

## Customization
You can customize the application by:
- Modifying the API endpoint in `server.js` if using a different weather API.
- Changing the styles in `public/styles.css`.
- Enhancing functionality in `app.js` as needed.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Node.js](https://nodejs.org/) - JavaScript runtime for building server-side applications.
- [Express.js](https://expressjs.com/) - Web framework for Node.js.
- [OpenWeatherMap API](https://openweathermap.org/api) - Source for weather data.
