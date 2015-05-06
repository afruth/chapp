#Chapp package: easy plugin chat for meteor

In order to use it you need to set two Session variables:

    Session.set('chapp-username','Desired username'); //you could set the user name on user login
    Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.
    Session.set('chapp-historysince',new Date()); //Limit messages based on the date they were posted

The variables are reactive, you can change them at any time.

Then, in your template all the chat template: `{{>chapp_form}}`

These are the chat templates, you can style the look and feel in your css:

    <template name="chapp_form">
        <div id="chapp_wrapper">
            <div id="chapp_text">
                {{#each chapp}}
                    {{>chapp_item}}
                {{/each}}
            </div>
    
            <form id="chapp-form">
                <div id="chapp-input-div"><input id="chapp-input" type="text" placeholder="Enter your message here" /></div>
                <button id="chapp-button" type="submit">Send</button>
            </form>
        </div>
    </template>
    
    <template name="chapp_item">
        <p>
                <span class="chapp-chat-date">{{formatDate chatDate}}</span> |
                <span class="chapp-username">{{chatUserName}}:</span>
                <span class="chapp-message">{{chatText}}</span>
        </p>
    </template>

This is far from ready, but usable. I've published it to familiarize myself with the new package system. It's tested in a real Meteor app, but doesn't have yet test suites.