# Timestamp Microservice
Check live demo at: [heroku](https://frankbearzou-timestamp-api.herokuapp.com).
## User Stories
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.  

## Installation Instructions
1. clone this repository and enter to the cloned directory:  

    ```bash
    git clone https://github.com/frankbearzou/timestamp-api
    cd timestamp-api
    ```
2. install the depend npm packages:  

    ```bash
    npm install
    ```
3. run program:

    ```bash
    npm run start
    ```
    or  
    ```bash
    node ./bin/www
    ```
4. Checking the web by clicking [this link](http:localhost:3000/), or inputing `http:localhost:3000/` in Chrome browser.