const{createApp} = Vue;

createApp({
    data: function(){
        return{
            todos : [
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
    // Debug
    created(){
        console.log("vue")
    }
}).mount("#app");