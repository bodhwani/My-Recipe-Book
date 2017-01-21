FlowRouter.route('/', {
   name: "home",
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: "recipe-book",
    action() {
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
    //this is will go to Recipes.html and from there,it will go to NewRecipe.html(a template).
});

