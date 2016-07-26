/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Comments.attachSchema(new SimpleSchema({
  postId: orion.attribute('hasOne', {
    // the label is the text that will show up on the Update form's label
    label: 'Post'
  }, {
    // specify the collection you're making the relationship with
    collection: Posts,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'title',
    // dunno
    publicationName: 'someRandomStringC1',
  }),
  userId: orion.attribute('hasOne',{
	  type: String,
	  label:'Author',
	  optional: false
  }, {
	  collection: Meteor.users,
	  titleField: 'profile.name',
	  publicationName: 'userRandomStringC2',
  }),
  author: {
      type: String,
      optional: false,
      autoform: {
        type: 'hidden',
        label: false
      }
  },
  submitted: {
    type: Date,
    optional: false,
  },
  body: orion.attribute('summernote',{
	  label: "body"
  }),
  image: orion.attribute('image', {
      optional: true,
      label: 'Comment Image'
    }),
}));