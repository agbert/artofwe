/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Comments.attachSchema(new SimpleSchema({
  linkId: {
	  type: String,
	  label: "linkID",
  },
  linkType: orion.attribute('hasOne', {
	  type:String,
	  label: "Link Type",
	  optional: false,
  },{
	  collection: OrganizationTypes,
	  titleField: "name",
	  publicationName: "commentLinkTypeC1",
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
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy'),
  updatedAt: orion.attribute('updatedAt'),
  updatedBy: orion.attribute('updatedBy'),
  body: orion.attribute('summernote',{
	  label: "body"
  }),
  image: orion.attribute('image', {
      optional: true,
      label: 'Comment Image'
    }),
}));