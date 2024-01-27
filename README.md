Crypto Market Data App
Overview
This project is a simple web application that fetches cryptocurrency market data from the CoinGecko API and displays it in a table format. The application allows users to search and filter the data as well as sort it based on market cap and percentage change.

Features
Fetch data from CoinGecko API using both .then and async/await.
Render the fetched data in a table format as specified in the UI design.
Implement a search button to allow users to filter data based on input.
Create a sort button for users to sort data based on market cap and percentage change.
Technologies Used
HTML
JavaScript
CSS
API Endpoint
CoinGecko API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
Installation
Clone the repository:

bash
Copy code
git clone [repository-url]
Open the project directory:

bash
Copy code
cd crypto-market-data-app
Open index.html in your preferred web browser.

Usage
Open the application in your web browser.
Explore the cryptocurrency market data in the table.
Use the search button to filter data based on your input.
Use the sort button to sort data based on market cap and percentage change.
Code Structure
index.html: HTML file containing the structure of the web page.
style.css: CSS file for styling the web page.
script.js: JavaScript file containing logic for fetching data, rendering the table, and handling user interactions.
Development
To make changes or enhancements, edit the respective files in the project.
Ensure proper styling based on the Figma design provided.
