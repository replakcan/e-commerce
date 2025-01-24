#Pandora e-commerce platform

## Tools
  -React
  -react-router
  -react-hook-form
  -redux for global state management
  -redux-thunk, redux-logger
  -Icons: lucide-react, simple-icons;
  -CSS: TailwindCSS, shadCN
  -Notifications: toastify-js
  -Formatter: eslint

## Features
  1. Fetches shop products from an actual backend server,
  2. There are 500+ products in total, app doesn't fetch all data at once to prevent performance loss,
    -Solves this issue with ***pagination*** and default limit / ofset parameters;
  3. ***Protected Route*** to finish the order
    -User needs to be logged in to complete shop order,
    -Auth token is saved at ***localStorage***, verifies if token is there on componentDidMount and auto logins if so;
  4. ***Responsive Design***
    -Uses both _flexbox_ and _grid_ for component layout;
  
