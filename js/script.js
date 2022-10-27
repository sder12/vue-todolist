const{createApp} = Vue;

createApp({
    data: function(){
        return{
            todoList : [
                {
                    text: "Go grocery shopping",
                    done: true,
                },
                {
                    text: "Do boolean's exercise",
                    done: false,
                },
                {
                    text: "Add the input in the markup",
                    done: true,
                },
                {
                    text: "Enter to insert new todos",
                    done: false,
                },
            ]
        }
    },
    methods:{
        cancelTodo(indexTodo){
            this.todoList.splice(this.todoList[indexTodo], 1);
        },

    },
    // Debug
    created(){
        console.log("vue")
    }
}).mount("#app");