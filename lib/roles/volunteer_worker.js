/*
 * First you must define the role
 */
VolunteerWorker = new Roles.Role('VolunteerWorker');

/**
 * Allow the actions of the collection
 */
VolunteerWorker.allow('collections.posts.index', true); // Allows the role to see the link in the sidebar
VolunteerWorker.allow('collections.posts.insert', false); // Allows the role to insert documents
VolunteerWorker.allow('collections.posts.update', true); // Allows the role to update documents
VolunteerWorker.allow('collections.posts.remove', true); // Allows the role to remove documents
VolunteerWorker.allow('collections.posts.showCreate', false); // Makes the "create" button visible
VolunteerWorker.allow('collections.posts.showUpdate', true); // Allows the user to go to the update view
VolunteerWorker.allow('collections.posts.showRemove', true); // Shows the delete button on the update view

/**
 * Set the index filter.
 * This part is very important and sometimes is forgotten.
 * Here you must specify which documents the role will be able to see in the index route
 */
VolunteerWorker.helper('collections.posts.indexFilter', {}); // Allows the role to see all documents

/**
 * Allow the actions of the collection
 */
VolunteerWorker.allow('collections.comments.index', true); // Allows the role to see the link in the sidebar
VolunteerWorker.allow('collections.comments.insert', false); // Allows the role to insert documents
VolunteerWorker.allow('collections.comments.update', true); // Allows the role to update documents
VolunteerWorker.allow('collections.comments.remove', true); // Allows the role to remove documents
VolunteerWorker.allow('collections.comments.showCreate', false); // Makes the "create" button visible
VolunteerWorker.allow('collections.comments.showUpdate', true); // Allows the user to go to the update view
VolunteerWorker.allow('collections.comments.showRemove', true); // Shows the delete button on the update view

/**
 * Set the index filter.
 * This part is very important and sometimes is forgotten.
 * Here you must specify which documents the role will be able to see in the index route
 */
VolunteerWorker.helper('collections.comments.indexFilter', {}); // Allows the role to see all documents