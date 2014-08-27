#Chapp package: easy plugin chat for meteor

In order to use it you need to set two Session variables:

    Session.set('chapp-username','Desired username'); //you could set the user name on user login
    Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.
    
The variables are reactive, you can change them at any time.

Then, in your template all the chat template: `{{>chapp_form}}`

This is far from ready, but usable. I've published it to familiarize myself with the new package system. It's tested in a real Meteor app, but doesn't have yet test suites.