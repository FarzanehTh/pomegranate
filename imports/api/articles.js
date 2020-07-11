import{Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export const Articles = new Mongo.Collection('articles');
/* TODO: save articles in db */
Meteor.methods({
  'articles.insert'(articles) {
   // Make sure the user is logged in before inserting a task
   if (! Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
   }
    Articles.insert({
      articles,
     createdAt: new Date(),
     owner: Meteor.userId(),
     username: Meteor.user().username,
   });
 }
});
