# Weather App

A simple weather application built while learning JavaScript, async programming, and basic DOM manipulation.

This project uses the OpenWeatherMap API to fetch real-time weather data and display it on a minimal UI.

The goal was not to clone a tutorial project feature-by-feature, but to understand:

- How `fetch` works  
- How Promises and `async/await` behave  
- How API data flows into the DOM  
- How small UI states are controlled with JavaScript  

## Features

- Search weather by city  
- Fetches live data from OpenWeatherMap  
- Displays:
  - City name  
  - Date  
  - Temperature in °C  
  - Weather description  
- Clean, minimal dark UI  

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- OpenWeatherMap API  

## Notes

This project was built as a learning exercise.  
Parts of the structure were inspired by a tutorial, but the implementation and decisions were made intentionally to avoid blind copying.

The focus is understanding execution, not visual polish.

## Setup

1. Clone the repository  
2. Open `index.html` in a browser  
3. Insert your own OpenWeatherMap API key in the JS file  

```js
const apiKey = "YOUR_API_KEY_HERE";
