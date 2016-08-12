Meteor.startup(function() {
 if(Meteor.isClient){
	  //{{ dict  'Microscope' }}
	  var title = orion.dictionary.get('mainPage.title', '!ArtOfWe');
	  var headerDescription = orion.dictionary.get('mainPage.headerDescription', '!Art Of We H D');
      return SEO.config({
        title: title,
        meta: {
          'description': headerDescription
        },
        og: {
          'image': 'ArtOfWeLogo100x.png' 
        }
      });
    }
});