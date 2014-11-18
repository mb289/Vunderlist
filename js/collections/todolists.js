;(function(window, undefined){

    window.app = window.app || {};

    var TodoLists = Backbone.Collection.extend({
        model: app.TodoList
    })

    app.TodoLists = TodoLists;

})(window, undefined);