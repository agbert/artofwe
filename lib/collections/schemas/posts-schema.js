/**
 * Now we will define and attach the schema for this collection.
 * Orion will automatically create the corresponding form.
 */
Posts.attachSchema(new SimpleSchema({
  // We use `label` to put a custom label for this form field
  // Otherwise it would default to `Title`
  // 'optional: false' means that this field is required
  // If it's blank, the form won't submit and you'll get a red error message
  // 'type' is where you can set the expected data type for the 'title' key's value
  title: {
    type: String,
    optional: false,
    label: 'Post Title'
  },
  // regEx will validate this form field according to a RegEx for a URL
  url: {
    type: String,
    optional: false,
    label: 'URL',
    regEx: SimpleSchema.RegEx.Url
  },
  // autoform determines other aspects for how the form is generated
  // In this case we're making this field hidden from view

  userId: orion.attribute('hasOne',{
	  type: String,
	  label:'Author',
	  optional: false
  },{
	  collection: Meteor.users,
	  titleField: 'profile.name',
	  publicationName: 'userRandomStringP2',
  }),
  // 'type: Date' means that this field is expecting a data as an entry
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy'),
  updatedAt: orion.attribute('updatedAt'),
  updatedBy: orion.attribute('updatedBy'),
  commentsCount: {
    type: Number,
    optional: false
  },
  // 'type: [String]' means this key's value is an array of strings'
  upvoters: {
    type: [String],
    optional: true,
    autoform: {
      disabled: true,
      label: 'upvoter'
    },
/*	render: function (val, type, doc) {
		var upvoter = val;
		var user = Meteor.users().findOne(upvoter).profile.name;
		return user;
	},*/
  },
  votes: {
    type: Number,
    optional: true
  },
}));
