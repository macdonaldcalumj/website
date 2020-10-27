---
id: 1756ba1ea72
title: Arsenal Skills Zone
image: /uploads/arsenal-1.jpg
date: Feb 2020
technologies:
  - 1755cc329f6
  - 1755cc51cb3
extraImages:
  - /uploads/arsenal-2.jpg
---
For a while in the shop at Arsenal FC's Emirates Stadium there has been an augmented reality experience where customer's can show off their football skills with the Arsenal player of their choice "watching on".  The shop were not satisfied with the existing system and had it replaced.

There are three pieces of software I wrote to create this experience.  A Unity application displays the camera feed, shows the Arsenal player and records the video.  An iPad app is used by users use input their information and select the player they want to star in the video with and that the shop assistant uses to trigger reactions from the player.  A Django application is used to allow the other two to communicate with eachother as well as doing final processing to the video and sending it to the user once the session is  complete.  The Django application also acts as an admin for the system and allows quick and easy updating of players.