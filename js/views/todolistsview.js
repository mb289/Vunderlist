;(function(window, undefined){

    window.app = window.app || {};

    var TodoListsView = Backbone.View.extend({
        tagName: "div",
        className: "todolists grid grid-2-400 grid-4-600 squarify-grid",
        render: function(){
            // 1. empty out the container element (html is "")
            this.el.innerHTML = "";
            // 2. for each model in the collection
            var self = this;
            this.collection.forEach(function(m){
                var subview = new app.TodoListView({model: m});
                self.$el.append(subview.el);
                self.$el.append("\n");
            })
            // 3. ... append a TodoListView(model)
        }
    });

    app.TodoListsView = TodoListsView;

})(window, undefined);