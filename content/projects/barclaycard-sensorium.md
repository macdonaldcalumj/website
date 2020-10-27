---
id: 1756b2bb246
title: barclaycard Sensorium
image: /uploads/barclaycard-sensorium-1.jpg
date: Jun 2019
technologies:
  - 1755cc329f6
  - 1755cc39d81
  - 1755cc2a9bf
extraImages:
  - /uploads/barclaycard-sensorium-2.jpg
  - /uploads/barclaycard-sensorium-3.jpg
---
In 2019 barclaycard had a 'Sensorium' area at three festivals across the country: Download, British Summer Time and Latitude.  Part of this area was a tunnel that attendees would go through to create their own mini music video.  

The user process was for the group enter their email addresses on a touch screen at the entrance of the tunnel which would begin the session and trigger a music clip based on the festival line-up and a voice over that instructed them through the experience.  There was two points in the tunnel that the users would stand and and dance to the music whilst being filmed by three cameras (six in total) as a light show played out.  Once they were finished the second recording portion all the footage would be edited into a 15 second long clip and emailed to them to share on social media.

At the heart of this project was a Django application that would control nine computers that handled the video recording and audio playback with websockets using Django Channels.  Each of the six DSLR cameras were connected to a Raspberry Pi and two more were used for the audio, as well as triggering the light show, and another computer was used for the touch screen interface.  FFmpeg was used for the video editing.