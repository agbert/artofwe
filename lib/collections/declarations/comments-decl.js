
Comments = new orion.collection('comments', {
//xx
	singularName: 'comment', // The name of one of these items
	pluralName: 'comments', // The name of more than one of these items
	link: {
	// *
	//  * The text that you want to show in the sidebar.
	//  * The default value is the name of the collection, so
	//  * in this case it is not necessary.

		title: 'Comments', 
	},
	/**
	* Tabular settings for this collection
	*/
	tabular: {
		// here we set which data columns we want to appear on the data table
		// in the CMS panel
		columns: [
			{
				data: "linkedType",
				title: "Source",
			},
			{
				data: "linkId", 
				title: "Title",
				render: function (val, type, doc) {
					var linkedType = doc.linkedType;
					var linkId = val;
					var linkTitle = "";
					switch (linkedType) {
						case "Post":
							linkTitle = "<small>Post</small><br>"+Posts.findOne(linkId).title;
							break;
						case "Organization":
							linkTitle = "<small>Organization</small><br>"+Organizations.findOne(linkId).title;
							break;
						case "Project":
							linkTitle = "<small>Project</small><br>"+Projects.findOne(linkId).title;
							break;
					}
					return linkTitle;
				}
			}, 
			{
				data: "body",
				title: "Comment",
				tmpl: Meteor.isClient && Template.commentsIndexBlurbCell
			},
			orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
			orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
			orion.attributeColumn('updatedAt', 'updatedAt', 'Updated At'),
			orion.attributeColumn('updatedBy', 'updatedBy', 'Updated By'),
		]
  	}
});

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(commentAttributes, {
      postId: String,
      body: String
    });
    
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    
    // update the post with the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    
    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);
    
    return comment._id;
  }
});

