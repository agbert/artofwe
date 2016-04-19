

Contributors = new orion.collection("contributors",{
	singularName: "contributor",
	pluralName: "contributors",
	title: "contributors",
	link:{
		title: "Contributors"
	},
	tabular:{
		columns: [
			{data: "name", title: "Name" },
			{data: "weburl", title:"URL", autoform: { afFieldInput: {type: "url"}}},
			orion.attributeColumn("image","image","Image"),
			orion.attributeColumn("summernote","description","Description"),
			orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
			orion.attributeColumn('createdAt', 'createdAt', 'Created At')
			
		]
	}
});



Contributors.attachSchema(new SimpleSchema({
  name: {
	  type: String
  },
  weburl: {
	  type: String
  },
  image: orion.attribute('image', {
        label: 'Image',
        optional: true
  }),
  description: orion.attribute('summernote', {
        label: 'Description'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

