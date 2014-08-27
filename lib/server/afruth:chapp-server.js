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

Meteor.publish("chapps", function(docId, dateNow) {
    if(!docId)
        docId = ChappOptions.defaultDocId;


    return Chapps.find({
        chatDoc: docId,
        chatDate: {
            $gte: dateNow
        }
    },{
        sort: {
            chatDate: 1
        },
        limit: 50
    });
});