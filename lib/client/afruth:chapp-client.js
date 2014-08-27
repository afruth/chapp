Meteor.methods({
    enterChat: function(chatText,chatDoc,chatUser) {
        check(chatText, String);

        if(!chatDoc)
            chatDoc = ChappOptions.defaultDocId;

        if(!chatUser)
            chatUser = ChappOptions.defaultUserName;

        Chapps.insert({
            chatText: chatText,
            chatDoc: chatDoc,
            chatUserName: chatUser,
            chatDate: new Date()
        })
    }
});

Template.chapp_form.created = function() {
    Deps.autorun(function () {
        var dateNow = new Date();
        Meteor.subscribe("chapps", (!Session.equals('chapp-docid',undefined))?Session.get('chapp-docid'):null, dateNow);
    })
};

Template.chapp_form.helpers({
    chapp: function() {
        var docId = Session.get('chapp-docid');
        return Chapps.find({

        },{
            sort: {
                chatDate: 1
            }
        });
    }
});

Template.chapp_item.helpers({

    formatDate: function(date) {
        return moment(date).format('hh:mm');
    }
})


Template.chapp_form.events({
   'submit #chapp-form': function(ev) {
       ev.preventDefault();
       var id = (!Session.equals('chapp-docid',undefined))?Session.get('chapp-docid'):null;
       var uname = (!Session.equals('chapp-username',undefined))?Session.get('chapp-username'):null;
       var text = document.getElementById('chapp-input').value;
       if(text != '') {
           Meteor.call('enterChat', text, id, uname);
           document.getElementById('chapp-input').value = '';
           document.getElementById('chapp-input').focus();
           var objDiv = document.getElementById("chapp_text");
           objDiv.scrollTop = objDiv.scrollHeight + 170;
       }

   }
});