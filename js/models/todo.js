;(function(window, undefined){

    window.app = window.app || {};

    var Todo = Backbone.Model.extend({
        defaults: {
            description: "No description given."
        }
    })

    app.Todo = Todo;

})(window, undefined);