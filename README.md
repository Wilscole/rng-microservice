# rng-microservice<br/>

## Overview: <br/>
The rng-microserve is hosted by vercel at https://testmicro.vercel.app/. The microservice is serverless express.js and allows users to make a call to the api
where it will then generate a random number between 0-100 (inclusive) and return it to the requesting url. 

##Requesting and Receivng Data: <br/>
Users can request data via an http get request. From there, the user will await the response which will be sent back in json format. 

The below example highlights the functionality using the JavaScript Fetch API with React:

<img src="https://github.com/Wilscole/rng_microservices/blob/trunk/images/Screen%20Shot%202022-10-31%20at%205.47.53%20PM.png" alt="Alt text" title="Optional title">

Upon clicking the 'Call API' button the 'getResponse' function will execute as seen below. This will make a call to the api. From there, it will await the response from the API which will send back the randomly generated number and render it into the dom. 

<img src="https://github.com/Wilscole/rng_microservices/blob/trunk/Screen%20Shot%202022-10-31%20at%206.12.40%20PM.png">
     
Once the randomly generated number is received in the response, its state is updated the number is rendered into the DOM:

<img src="https://github.com/Wilscole/rng_microservices/blob/trunk/Screen%20Shot%202022-10-31%20at%206.14.10%20PM.png" >


For further understanding, the below ULM diagram provides context into how requesting and receiving is happening. 


##ULM Diagram: <br/>





