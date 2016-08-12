// Fixture data 
if (Posts.find().count() === 0) {
	var now = new Date().getTime();
  
	// create two users

	var agbert = Meteor.users.findOne({username:"agbert"});
	var alipp = Meteor.users.findOne({username:"alipp"});
	
	if (typeof agbert == 'undefined') {
		var agbertId = Accounts.createUser({
			profile: {
				name: 'Andrew Gallagher'
			},
			username: "agbert",
			email: "agbert@gmail.com",
			password: "drag0n",
		});
		agbert = Meteor.users.findOne(agbertId);
	}

	if (typeof alipp == 'undefined') {
		var alippId = Accounts.createUser({
			profile: {
				name: 'Amanda Lipp'
			},
			username: "alipp",
			email: "alipp728@gmail.com",
			password: "123456",
		});
		alipp = Meteor.users.findOne(alippId);
	}

	Roles.addUserToRoles( agbert._id ,  ["admin"] );
	Roles.addUserToRoles( alipp._id ,  ["admin"] );


	var telescopeId = Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/',
		createdBy: agbert._id,
		createdAt: new Date(now - 7 * 3600 * 1000),
		updatedBy: agbert._id,
		updatedAt: new Date(now - 7 * 3600 * 1000),
		commentsCount: 2,
		upvoters: [], votes: 0
	});

	Comments.insert({
		linkType: "Post",
		linkId: telescopeId,
		createdBy: alipp._id,
		createdAt: new Date(now - 5 * 3600 * 1000),
		updatedBy: alipp._id,
		updateedAt: new Date(now - 5 * 3600 * 1000),
		body: 'Interesting project Sacha, can I get involved?'
	});

	Comments.insert({
		linkType: "Post",
		linkId: telescopeId,
		createdBy: agbert._id,
		createdAt: new Date(now - 3 * 3600 * 1000),
		updatedBy: agbert._id,
		updatedAt: new Date(now - 3 * 3600 * 1000),
		body: 'You sure can AGBert!'
	});
  
	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com',
		createdBy: agbert._id,
		createdAt: new Date(now - 10 * 3600 * 1000),
		updatedBy: agbert._id,
		updatedAt: new Date(now - 10 * 3600 * 1000),
		commentsCount: 0,
		upvoters: [], votes: 0
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com',
		createdBy: agbert._id,
		createdAt: new Date(now - 12 * 3600 * 1000),
		updatedBy: agbert._id,
		updatedAt: new Date(now - 12 * 3600 * 1000),
		commentsCount: 0,
		upvoters: [], votes: 0
	});
  
	for (var i = 0; i < 10; i++) {
		Posts.insert({
			title: 'Test post #' + i,
			url: 'http://google.com/?q=test-' + i,
			createdBy: alipp._id,
			createdAt: new Date(now - i * 3600 * 1000 + 1),
			updatedBy: alipp._id,
			updatedAt: new Date(now - i * 3600 * 1000 + 1),
			commentsCount: 0,
			upvoters: [], votes: 0
		});
	}
}