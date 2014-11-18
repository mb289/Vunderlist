;(function(window, undefined){

    window.app = window.app || {};

    var Todos = Backbone.Collection.extend({
        model: app.Todo
    })

    app.Todos = Todos;

})(window, undefined);