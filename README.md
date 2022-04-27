# **Pomegranate**

Pomegranate is an app that allows users to search for the news that they would like to read based on different criteria.

## Quick Start Guide

1.  Register on Google Cloud and obtain google analysis json file and save it. Then provide the location of that file in `server/main.js` as required.

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

## API and Technologies Used:

- https://newsapi.org/s/us-news-api
- `Meteor.js`, `node.js`
- `Google Cloud` (Sentiment Analysis)

## Demo

<p align="center">
    <kbd><img src="/public/pomegranate-1.png" alt="pomegranate1" style="width:450px;height:300px;"></kbd>
</p>

<p align="center">
    <kbd><img src="/public/pomegranate-2.png" alt="pomegranate2" style="width:450px;height:300px;"></kbd>
</p>

<!-- <p align="center">
    <kbd><video width="450" height="240" controls autoplay loop muted controlsList="nodownload noremoteplayback">
    <source src="/public/pomegranate.mp4" type="video/mp4">
    </video></kbd>
</p> -->