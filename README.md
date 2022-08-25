# MERN-template
  
This is a boilerplate application that is built upon the MERN stack. There is a fully functioning Backend and Frontend, designed using the MVC Pattern. 

Functionalities include:
  - Sign up/Sign in  
  - Adding/Editing/Deleting/Searching a Doctor and Patient  
  - Basic Schema of Doctor and Patient  
Check client folder for more details  
     
What you need to run this code  
  - Node (13.12.0)  
  - NPM (6.14.4)   
  - MongoDB (4.2.0) > to be deprecated  

## Starting a new project

### Development
  1. Clone the repository from github onto your computer.  
  2. Run `npm install` in the root directory once and redirect to the client folder and run it again to install all the packages.  
  3. Run `npm run dev` in the root directory  to start the app.    

### Production
  1. Run `npm install` in the root directory once and redirect to the client folder and run it again to install all the packages.  
  2. Run `npm run build` in the client directory to build the react app and get it ready for deployment.  
  3. Run `npm start` in the root directory to run the app.  
  4. Change the mongoDB URI to the respective URI in file named 'config.js'.   
  5. During deployment to heroku, connect the heroku account to the deployment branch and push to the branch to deploy to heroku.  
