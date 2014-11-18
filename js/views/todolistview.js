;(function(window, undefined){

    window.app = window.app || {};

    var TodoListView = Backbone.View.extend({
        tagName: "a",
        template: "<span>{name}</span>",
        initialize: function(){
            this.render();
        },
        render: function(){
            this.el.setAttribute('href', "#lists/"+this.model.cid);
            this.el.innerHTML = _.template(this.template, this.model.attributes);
        }
    });

    app.TodoListView = TodoListView;

})(window, undefined);