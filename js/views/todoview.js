;(function(window, undefined){

    window.app = window.app || {};

    var TodoView = Backbone.View.extend({
        tagName: "div",
        className: "todo",
        template: "<span>{title}</span> <span class='delete'></span><span class='markDone'></span><span class='edit'>EDIT</span>",
        initialize: function(){
            this.render();
        },
        render: function(){
            this.el.innerHTML = _.template(this.template, this.model.attributes);
        },
        events: {
            "click .delete": "removeMe",
            "click .markDone": "markDone",
            "click .edit": "editMe",
            "submit form:": "updateTodo"
        },
        removeMe: function(event){
            $.publish("todo_deleted", this.model);
        },
         markDone: function(event){
            // $.publish("todo_markdone", this.model);
            console.dir(this.el);
            this.el.classList.toggle('strikeOut');
            console.dir(this.el);
        },
        editMe: function(){
            this.template = this.template +"<form><div><input type='text'></div><button>add</button></form>";
            this.render();
        },
        updateTodo: function(event){
            event.preventDefault();
            var updateTodo = {title: this.el.querySelector("input").value};
            this.model.set({title:updatedTodo.title});
            this.template="<span>{title}</span> <span class='delete'></span><span class='markDone'></span><span class='edit'>EDIT</span>"
            this.render();
        }
        
    });

    app.TodoView = TodoView;

})(window, undefined);