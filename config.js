if (Meteor.isClient) {
    CmsInn.configure({
        layoutTemplate: 'layout',
        plugins: {
            navigation: {
                pageTypes: [
                    {
                        type: "home"
                    }
                ],
                defaultTemplate: 'home' 
            },
        }
    });
}

if (Meteor.isServer) {
    CmsInn.configure({});
}