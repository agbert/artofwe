
/**
 * Now we will define and attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
OrganizationTypes.attachSchema(new SimpleSchema({
	name: {
		type: String,
		optional: false,
		label: "Name"
	},
	description: orion.attribute('summernote',{
		label: "Description"
	}),
	createdAt: orion.attribute('createdAt'),
	createdBy: orion.attribute('createdBy'),
	updatedAt: orion.attribute('updatedAt'),
	updatedBy: orion.attribute('updatedBy'),
	image: orion.attribute('image', {
		optional: true,
		label: 'Comment Image'
	}),
}));