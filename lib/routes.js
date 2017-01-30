FlowRouter.triggers.enter([function (context, redirect) {
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);


FlowRouter.route('/', {
   name: "home",
    action() {
        if(Meteor.userId()){
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: "recipe-book",
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
    //this is will go to Recipes.html(in recipes folder) and from there,it will go to NewRecipe.html(a template).
});

FlowRouter.route('/recipe/:id', {
    name: "recipe",
    action() {
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});
