
Template.RecipeSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});
Template.RecipeSingle.helpers({
    recipe: ()=> {
        var id = FlowRouter.getParam('id');
        //this 'id' should have same name as given in routes.js - :id
        return Recipes.findOne({_id : id});
    }
});