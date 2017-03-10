<template>
    <div id="app">
        <img src="./assets/logo.png">
        <message :status="status" :count="todos.length"></message>
        <div>
            <input type="text" @keyup.enter="addTodo" v-model="newTodo">
            <button @click="allDone">Mark all as done</button>
            <list :todos="showTodos"></list>
            <buttons @newStatus="setStatus" :status="status"></buttons>
            <button @click="clearDone">Clear All Done</button>
        </div>
    </div>
</template>

<script type="text/babel">

    import List from './components/List.vue'
    import Buttons from './components/Buttons.vue'
    import Message from './components/Message.vue'

    export default {
        name: 'app',
        data () {
            return {
                newTodo:'',
                todos: [],
                status: 'ALL'
            }
        },
        computed:{
            showTodos(){
                switch(this.status){
                    case 'DONE':
                        return this.todos.filter(todo => todo.done);
                    case 'IN_PROGRESS':
                        return this.todos.filter(todo => !todo.done);
                    default:
                        return this.todos
                }
            }
        },
        methods: {
            addTodo(){
                this.todos.push({
                    text: this.newTodo,
                    done:false
                });
                this.newTodo = '';
            },
            setStatus(status){
                this.status = status
            },
            clearDone(){
                this.todos = this.todos.filter(todo => !todo.done);
                this.status = 'ALL'
            },
            allDone(){
                this.todos = this.todos.map(todo => {
                    return Object.assign(todo, {
                        done: !todo.done
                    })
                });
                this.status = 'ALL'
            }
        },
        components:{
            List,
            Buttons,
            Message
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1, h2 {
        font-weight: normal;
    }

    .done{
        text-decoration: line-through;
    }
    a {
        color: #42b983;
    }
</style>
