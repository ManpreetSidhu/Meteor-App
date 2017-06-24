
import { Meteor } from 'meteor/meteor'
Items = new Mongo.Collection('items');
Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
        
    }
});
Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
         
    }
});
Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
if(Meteor.isClient){
	Template.leaderboard.helpers({
		'lists': function(){
			return Items.find();
		}
	});

	Template.dashboard.events({
		'submit form':function(event){
			var message = event.target.message.value;
			console.log(message);
			var today = new Date();           

            var formattedtoday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

			Items.insert({
			    messages: message,
				createdAt: formattedtoday 
			});
	    }
	});
	Template.leaderboard.events({
		'click input[type=button]':function(event){
			return Items.remove(this._id);
		    
		}
	});
	
}
if (Meteor.isServer) {
	

}

