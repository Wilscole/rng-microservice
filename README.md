# rng-microservice

## Overview:
The rng-microserve is hosted by vercel at https://testmicro.vercel.app/. The microservice is serverless express.js and allows users to make a call to the api
where it will then generate a random number between 0-100 (inclusive) and return it to the requesting url. 

##Requesting and Receivng Data:
Users can request data via an http get request. From there, the user will await the response which will be sent back in json format. 

The below example highlights the functionality using the JavaScript Fetch API with React:




