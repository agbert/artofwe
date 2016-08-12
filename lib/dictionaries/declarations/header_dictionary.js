orion.dictionary.addDefinition('title', 'mainPage', {
    type: String,
    label: 'Site Title',
    optional: false,
    min: 1,
    max: 40,
//	defaultvalue: '!!Site Title'
});

orion.dictionary.addDefinition('headerDescription', 'mainPage', {
    type: String,
    label: 'Header Description',
    optional: false,
    min: 1,
    max: 40,
//	defaultvalue: '!!Header Description'
});

orion.dictionary.addDefinition('htmlDescription', 'mainPage', 
  orion.attribute('summernote', {
    label: 'HTML Description',
    optional: true,
//	defaultvalue: '!!HTML Description'
  })
);

orion.dictionary.addDefinition('termsAndConditions', 'submitPostPage',  
  orion.attribute('summernote', {
    label: 'Terms and Conditions',
    optional: true,
//	defaultvalue: '!!Terms and Conditions'
  })
);