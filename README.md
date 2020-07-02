
<img width="447" alt="Screen Shot 2020-06-12 at 10 03 44" src="https://user-images.githubusercontent.com/59717705/84511140-1541ea00-ac94-11ea-838c-204b94ec4934.png">

# Foxeo 

[Please visit live site](https://foxeo.herokuapp.com/)

 Foxeo is a Vimeo's clone and is intended for storing and viewing artistic videos.

### The site allows for:

  * A user is able to join/login
  * All users can watch videos
  * Logged in users can see a list of their own videos
  * Logged in users can upload a video

### Technology

  * PostgreSQL 12
  * Ruby/Rails
  * Node
  * React/Redux
  * HTML video

  ### System dependencies
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2",
    "@babel/preset-react": "^7.10.1",
    "babel-loader": "^8.1.0",
    "normalize.css": "^8.0.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"

### Autoplay/mute issue

  As of 2018 Google Chrome do not allow autoplay on videos with sound which can be read about here [autoplay-policy-changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). In order to remedy this situation the following code was implemented:

<img width="897" alt="Screen Shot 2020-06-12 at 11 15 39" src="https://user-images.githubusercontent.com/59717705/84518098-2d1e6b80-ac9e-11ea-8a92-bd754e100687.png">


  On click the video autoplays with sound on:

  ![autoplay](https://user-images.githubusercontent.com/59717705/84521633-4f66b800-aca3-11ea-8377-ac3e6c8e5753.gif)


### Future updates

  * Comments
  * Likes
  * Search
