import { Meteor } from 'meteor/meteor';
import '../imports/api/articles.js';
import axios from 'axios';
// Import the Google Cloud client library
const language = require('@google-cloud/language');

process.env.GOOGLE_APPLICATION_CREDENTIALS = '/path to location of the gooogleAnalysis json file obtained from Google Cloud/';

Meteor.startup(() => {
  // code to run only on server at startup
});

Meteor.methods({
  'news.getNews': async (dataObj) => {
    const url = 'https://newsapi.org/v2/top-headlines';
    const params = {
      ...JSON.parse(dataObj),
      apiKey: '/your newsapi API key/'
    };
    try {
      const { data : { articles = ''} = {}} = await axios.get(url, {
        params
      });
      if (dataObj.articleSentiment!== 'Both'){
        return await sentimentAnalysis(articles);
      }
      return articles;
    } catch (e) {
      console.log(e)
    }
  }
});

const sentimentAnalysis = async (articles) => {
  // Instantiate a client
  const client = new language.LanguageServiceClient();

  const articlesArray = await articles.map(async(article) => {
    
    const document = {
      content: article.title,
      type: 'HTML',
    };

    // Detect the sentiment of the article
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment;
    return {
      ...article, sentiment: sentiment.score.toFixed(1)
    }
  });
  return await Promise.all(articlesArray);
}