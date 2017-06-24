import { Meteor } from 'meteor/meteor';
Items = new Mongo.Collection('items');

Meteor.startup(() => {
	Meteor.publish({
	    abc(){
	    	return "1";
		    console.log("hello");
		}
});
  // code to run on server at startup

});
