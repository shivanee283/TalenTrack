TalenTrack - One stop solution for students
Shivani Vikhar

Features

Signup and Login feature - Provides basic authentication
Teams Section -
1. Create a team
2. Join a Team with Code
Inside a Team -
1. Conversation Tab - Group chat for entire team
2. General Tab - List of all ongoing calls in the team
3. Call Log Tab - List of all the previous calls of team.
4. Scheduled Calls Tab - List of all the scheduled meetings
5. Tasks Tab - List of all pending and completed tasks of the team
6. Team Participant Tab - a. List of all team participants, b. Add participant to team (only for team admin)
Video Call Feature -
1. Invite option with a link (only valid for authorized members)
2. Mute/Unmute
3. Video on/off
4. List of participants in meeting
5. Chat option
6. Screen-share option (single-click zoom in)
7. Dominant speaker detection (Green border for Dominant Speaker - Not valid for peer-to-peer call)
8. Leave call option
Chat feature -
1. Media sharing using clipboard pasting, drag and drop and upload button
2. Message Seen feature (only for peer-to-peer chat)
3. Realtime Unread Message count increment (only for peer-to-peer chat)
4. Desktop Notification for incoming call/message (only for peer-to-peer chat)
5. Call Ring Feature for incoming calls (only for peer-to-peer chat)
Persistent Chatting Feature - Every chat in the application is persistent
Scheduler -
1. End ongoing calls if no user is present for more than 5 minutes
2. Send email 30 minutes before meeting
3. Send email 12 hours before tasks deadline
4. Start scheduled calls on time
Unit Tests - Added few unit tests in the code
Hosted Website - Hosted on https port
Technology Stack

Backend - Django, ExpressJS (only for chat)
Frontend - ReactJS
Database - SQLite
Redis and Celery
Socket.io
Firebase Cloud Messaging
Twilio Video SDK
Instructions to Install and Setup

Install redis and run it on it's default port
Install celery

Setup and run django server -

Navigate to /backend
Run the following command to install all the dependencies for django -> pip install -r requirements.txt (Python 2), or pip3 install -r requirements.txt (Python 3)
Navigate to /backend/msteams
Run -> python3 manage.py makemigrations
Run -> python3 manage.py migrate
Note steps 5 and 6 needs to be run only once while initial setup
Run -> python3 manage.py runsslserver --certificate {PWD}/ms-teams-clone/ssl/mydomain.crt --key {PWD}/ms-teams-clone/ssl/server.key 0.0.0.0:9000
Where {PWD} shall be replace with present working directory
Example -> python3 manage.py runsslserver --certificate /home/kaushiki/ms-teams-clone/ssl/mydomain.crt --key /home/kaushiki/ms-teams-clone/ssl/server.key 9000
Setup and run celery -

Navigate to /backend/msteams
Run -> celery -A msteams worker -l info -B
Setup and run socket io

Navigate to /socket
Run -> npm insatll
Run -> node index.js
Setup and run react app -

Navigate to /frontend
Run -> npm install
Run -> REACT_APP_DJANGO_URL={YOUR_DJANGO_URL} REACT_APP_SOCKET_URL={YOUR_SOCKET_URL} npm start
In place of {YOUR_DJANGO_URL} insert your local django url and in place of {YOUR_SOCKET_URL} insert your local socket io url.
For example -> REACT_APP_DJANGO_URL=https://localhost:9000/ REACT_APP_SOCKET_URL=https://localhost:5000 npm start
This shall run the react server on https://localhost:3000.
You can visit https://localhost:3000 on your browser to see the website in action.
Note - please allow the website to show notifications which is by default off in most of the broswers.
