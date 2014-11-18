window.onload = app;

// runs when the DOM is loaded
function app() {

    // load some scripts (uses promises :D)
    loader.load({
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }, {
            url: "./dist/style.css"
        },

        // todos
        {
            url: "./js/models/todo.js"
        }, {
            url: "./js/collections/todos.js"
        },

        // todolists
        {
            url: "./js/models/todolist.js"
        }, {
            url: "./js/collections/todolists.js"
        },

        // views
        {
            url: "./js/views/appview.js"
        }, {
            url: "./js/views/todolistsview.js"
        }, {
            url: "./js/views/todolistview.js"
        }, {
            url: "./js/views/todosview.js"
        }, {
            url: "./js/views/todoview.js"
        },

        // routers
        {
            url: "./js/routers/todorouter.js"
        }

    ).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;

        var o = $({});
        $.subscribe = function() {
            o.on.apply(o, arguments);
        };
        $.unsubscribe = function() {
            o.off.apply(o, arguments);
        };
        $.publish = function() {
            o.trigger.apply(o, arguments);
        };

        var router = new app.TodoRouter();
    })

}
