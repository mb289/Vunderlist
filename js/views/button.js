;(function(window, undefined){

    window.app = window.app || {};

    var TodoListsView = Backbone.View.extend({
        tagName: "button",
        className: "todolists",
        html:"<button>+</button>",
        render: function(collection){
            this.collection = collection;

            // overwrites the inner html to the html above
            this.el.innerHTML = this.html;

            // for each item in the collection
            var self = this;
            collection.forEach(function(m){
                // ... append a new TodoView()
                var subview = new app.TodoView({model: m});
                self.$el.append(subview.el);
            })
        },
        events: {
            "submit button": "addTodo"
        },
        addTodo: function(event){
            event.preventDefault();
            var newTodo = { title: this.el.querySelector("input").value };
            this.collection.add(newTodo);
            this.render(this.collection);
        },
        initialize: function(){
            var self = this;
            $.subscribe("todo_deleted", function(error, model){
                self.collection.remove(model)
                self.render(self.collection);
            })
        }
    });

    app.TodosView = TodosView;