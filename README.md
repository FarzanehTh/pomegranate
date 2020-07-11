# **Pomegranate**

Pomegranate is an app that allows users to sreach for the news that they would like to read.

## Quick Start Guide
1.  Register on Google Cloud and obtain gooogleAnalysis json file and save it. Then provide the location of that file to `server/main.js` as required.

2.  Then on your commandline, go to pomegranate project directory:

    ~~~~
    cd pomegranate
    ~~~~

    Then,

    ~~~~    
    npm  install
    ~~~~

    Then,

    ~~~~
    meteor run 
    ~~~~

3.  Open Pomegranate on your browser at local host on any port. For example you can open it on `http://localhost:3000`


4.  To stop the Pomegranate app, press ```Ctrl + z``` on your keyboard.

## Technologies used:

- Meteor.js, node.js, npm
- https://newsapi.org/s/us-news-api
- Google Cloud (Sentiment Analysis)

## Demo
<div align="center">
<img src="public/pomegranate1.png" alt="pomegranate">
<br/><br/><br/><br/>
<img src="public/pomegranate2.png" alt="pomegranate">
<br/><br/><br/><br/>
<video width="450" height="240" controls autoplay loop muted controlsList="nodownload noremoteplayback">
  <source src="public/pomegranate.mp4" type="video/mp4">
</video>
</div>