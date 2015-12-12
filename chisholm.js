if (Meteor.isClient) {
  Session.setDefault('isDonate', false);
  Session.setDefault('page', 'home');

  Template.body.helpers({
    home:     function () { return Session.get('page') === "home"; },
    about:    function () { return Session.get('page') === "about"; },
    vision:   function () { return Session.get('page') === "vision"; },
    news:     function () { return Session.get('page') === "news"; },
    events:   function () { return Session.get('page') === "events"; },
    store:    function () { return Session.get('page') === "store"; },
    contacts: function () { return Session.get('page') === "contacts"; },
    donate:   function () { return Session.get('isDonate') === true; }
  });

  Template.nav.events({
    "click .home": function () {
      Session.set('page', 'home');
    },
    "click .about": function () {
      Session.set('page', 'about');
    },
    "click .vision": function () {
      Session.set('page', 'vision');
    },
    "click .news": function () {
      Session.set('page', 'news');
    },
    "click .events": function () {
      Session.set('page', 'events');
    },
    "click .store": function () {
      Session.set('page', 'store');
    },
    "click .contacts": function () {
      Session.set('page', 'contacts');
    },
    "click .donate": function () {
      Session.set('isDonate', true);
    }
  });

  Template.donatepopover.events({
    "click .5": function () {
      window.open('https://www.test.com/', '_blank');
    },
    "click .10": function () {
      window.open('https://www.test.com/', '_blank');
    },
    "click .20": function () {
      window.open('https://www.test.com/', '_blank');
    },
    "click .50": function () {
      window.open('https://www.test.com/', '_blank');
    },
    "click .customdonation": function () {
      window.open('https://www.test.com/', '_blank');
    },
    "click .backdrop": function () {
      Session.set('isDonate', false);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
