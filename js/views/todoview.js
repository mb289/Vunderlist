;(function(window, undefined){

    window.app = window.app || {};

    var TodoView = Backbone.View.extend({
        tagName: "div",
        className: "todo",
        template: "<span>{title}</span> <span class='delete'></span>",
        initialize: function(){
            this.render();
        },
        render: function(){
            this.el.innerHTML = _.template(this.template, this.model.attributes);
        },
        events: {
            "click .delete": "removeMe"
        },
        removeMe: function(event){
            $.publish("todo_deleted", this.model);
        }
    });

    app.TodoView = TodoView;

})(window, undefined);