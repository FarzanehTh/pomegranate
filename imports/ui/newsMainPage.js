import {Template} from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import "./newsMainPage.html";
import "./newsMainPage.css";

Template.newsMainPage.onCreated(function(){
  this.articles = new ReactiveVar('');
  this.sentiment = new ReactiveVar('');
})

Template.newsMainPage.helpers({
  articles:()=> Template.instance().articles.get(),
});

Template.newsMainPage.events({
  'submit #newsSearchForm': function(event) {
    event.preventDefault();
    const formData = event.target;
    const data = {
      country: formData.countries.value,
      language: formData.language.value,
      category: formData.articleCategory.value,
      q: formData.articleKeyword.value,
      sources: formData.articleSource.value,
      datePublished: formData.datePublished.value,
      sortArticle: formData.sortArticle.value,
      articleSentiment: formData.articleSentiment.value
    };
    const t = Template.instance();
    Meteor.call('news.getNews', JSON.stringify(data), (err, res) => {
      if (err) {
        console.log(err);
        alert("We could not find any articles.")
      } else {
        t.sentiment.set(formData.articleSentiment.value);
        setArticles(res, t);
        return res;
      }
    });
  }
});

const setArticles = async(articles, t) => {
  const getSentiment ={
    positive: (a) => a.sentiment > 0 , 
    negative: (a) => a.sentiment < 0,
  };
  // if Both sentiments are requested, do not filter
  if (!getSentiment[t.sentiment.get()]){
    return t.articles.set(articles);
  }
  const arr = articles.filter((a)=>{
    return getSentiment[t.sentiment.get()](a);
  })
  return t.articles.set(arr);
}