# myBoard.space
###### Online education platform that removes the barrier of entry of high-speed internet for students.

## Inspiration
Almost all live online education experiences are based on a video stream. (WebEx, Zoom, etc) Instead of having a video stream being central to the learning process, our idea uses the idea of an online whiteboard (drawing software). The basis of the idea is the fact that instead of needing to stream video, viewers will just need to "download" arrays with (x,y,colour) and their browsers will handle the process of executing the data and making it seem like an online whiteboard. This process of only transmitting an array with coordinate information rather than requiring users to stream a live video feed creates a level playing ground for students with varying internet services (more notably, internet bandwidth and speeds, etc).

## What It Does
An online whiteboard. Essentially, the host of a session will have a paint-like interface where they can draw on the whiteboard to present their lesson. Viewers of the session will be able to join and watch the session live. 

## How We Built It

**Preliminary Design**
Much of our focus was directed towards making a simple UI, with only the core features needed to execute a whiteboard app - we devised mockups on Figma, and created some many of the icons used in our app using Adobe Illustrator. 

**Frontend**
For it's simplicity and ease of development, we chose to implement our front-end through the use of React. The use of React also allowed us to implement the Canvas component - the core of our project - along with the many paint tools required to be able to interact with it. 

**Serverless-Backend**
To aid in the realtime functionality of our app, we utilized Firebase's Realtime Database, which allowed us to constantly update a viewer's screen (their canvas) with the newly drawn components within a second. Firebase's seamless integration with React through its other features, such as FirebaseAuth, made it the ideal choice overall for our project. Ultimately, we also utilized Firebase's hosting service to deploy our web app.

## Usage
Head over to [myBoard.space](http://htn.myboard.space) to tinker with our project.
Also check out our [Devpost](https://devpost.com/software/myboard-space?ref_content=user-portfolio&ref_feature=in_progress) for the project.
