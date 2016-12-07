JEN Stack Template
==================

Basic JQuery, Node, Express template. Connects a client to a server on port 8080. Basic routes are set up for the index.html on the base url, as well as a 'testGet' route and a 'testPost' route which fire on button clicks.

Setup:
-----
[x] fork/clone this repo
[x] npm install in the folder into which you have cloned
[x] run 'npm start' to spin up the server
[x] check localhost://8080 in your browser
[x] test the button clicks and check for your output in the console

Completing the project:
----------------------
[x] display info from testGet call on the DOM
[x] add input fields for a new event: eventName, athleteName, award
[x] change the testPost button to get this user input and create a new object with this data
[x] change the test post to send this object to the server
[x] log out the req.body on the server side (should be this user input)
[x] create an array of events on the server side and push new objects to it
[x] have the server respond with a new object that has this array within
[x] log out that array in the browser console when received
[x] display those awards on the DOM
