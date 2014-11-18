;(function(window, undefined){

    window.app = window.app || {};

    var TodoRouter = Backbone.Router.extend({
        routes: {
            "lists/:id": "page2",
            "*default": "page1"
        },
        page1: function(){
            this.todolistsview.render();

            this.todolistsview.el.classList.add('active');
            this.todosview.el.classList.remove('active');
        },
        page2: function(id){
            var todolistmodel = this.todolists.filter(function(model){
                return model.cid === id;
            });

            if(!todolistmodel.length){
                window.location.hash = "#";
                return;
            }

            todolistmodel = todolistmodel[0];

            this.todosview.render(
                todolistmodel.get('todos')
            );

            this.todolistsview.el.classList.remove('active');
            this.todosview.el.classList.add('active');
        },
        initialize: function(){
            // data
            this.todolists = new app.TodoLists([
                { name: "todolist #1" },
                { name: "todolist #2" },
                { name: "todolist #3" },
                { name: "todolist #4" },
                { name: "todolist #5" },
                { name: "todolist #6" }
            ])
            this.todolists.forEach(function(todolist){
                // debugger;
                for(var i = 0; i < 6; i++){
                    todolist.get('todos').add({ title: "todo #"+i });
                }
            })

            // app view
            this.appview = new app.AppView();

            // append a TodoListsView only ONCE
            this.todolistsview = new app.TodoListsView({
                collection: this.todolists
            });
            this.appview.$el.append( this.todolistsview.el );

            // append a TodosView only ONCE
            this.todosview = new app.TodosView();
            this.appview.$el.append( this.todosview.el );

            Backbone.history.start();
        }
    });

    app.TodoRouter = TodoRouter;

})(window, undefined);