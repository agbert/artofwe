// When there is a change to userId, author gets updated
var query = Posts.find();
var handle = query.observeChanges({
  changed: function(postId, changedField){
	console.log("post change observed");
    if(changedField.userId){
		console.log("post userId:"+changedField.userId);
		var username = Meteor.users.findOne(changedField.userId).profile.name;
      	Posts.update({_id: postId}, {$set: {author: username}});
    };
  }
});