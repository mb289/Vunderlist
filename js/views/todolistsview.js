;(function(window, undefined){

    window.app = window.app || {};

    var TodoListsView = Backbone.View.extend({
        tagName: "div",
        className: "todolistsBro" ,
        html:"<form><div class='todoListForm'><input type='text'></div><button>add</button></form><div class='todolists grid grid-2-400 grid-4-600 squarify-grid'></div>\n",
        render: function(){
            // 1. empty out the container element (html is "")
             this.el.innerHTML = this.html
             this.$container = $(this.el.querySelector('.todolists'));
            
            // 2. for each model in the collection
            var self = this;
            this.collection.forEach(function(m){
                var subview = new app.TodoListView({model: m});
                self.$container.append(subview.el);
                self.$container.append("\n");
            })
            // 3. ... append a TodoListView(model)
        },
            events: {
            "submit form": "addTodoList"
        },
        addTodoList: function(event){
            event.preventDefault();
            var newTodoList = { name: this.el.querySelector("input").value };
            this.collection.add(newTodoList);
            this.render();
        },
        initialize: function(){
            var self = this;
            $.subscribe("todoList_deleted", function(error, model){
                self.collection.remove(model)
                self.render();
            })
        }

    });

    app.TodoListsView = TodoListsView;

})(window, undefined);