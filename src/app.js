import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [ 
                {name: "Clean", isDone: false},
                {name: "Study", IsDone: true},
                {name: "Shopping", IsDone: false}
            ],
            newTodo: ""
        },
        methods: {
            saveToDo: function(){
                this.todos.push({
                    name:this.newTodo,
                    isDone:false
                });
                this.newTodo = "";
            },
            completed: function(index){
                this.items[index].isDone = true;
            }
        }
    });
});
