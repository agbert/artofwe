OrganizationTypes = new orion.collection('organizationTypes', {
  singularName: 'organization type', // The name of one of these items
  pluralName: 'organization types', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Organization Types' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
      { 
        data: "name", 
        title: "Name" 
      },{
		data: "description",
		title: "Description",
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
  organizationTypeInsert: function(organizationTypeAttributes) {
/*
    var user = Meteor.user();

	organizationType = _.extend(organizationTypeAttributes, {
	createdBy: user._id,
	submitted: new Date()
    });
*/    
    // create the comment, save the id
    organizationType._id = organizationTypes.insert(organizationType);
    
    return organizationType._id;
  }
});

