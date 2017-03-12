<template>
    <div id="app">
        <img src="./assets/logo.png">
        <message :status="status" :count="todos.length"></message>
        <div>
            <input type="text" @keyup.enter="addTodo" v-model="newTodo">
            <button @click="allDone">Mark all as done</button>
            <list
                    :todos="showTodos"
                    @saveChange="save"
                    @removeTodo="removeTodo">

            </list>
            <buttons @newStatus="setStatus" :status="status"></buttons>
            <button @click="clearDone">Clear All Done</button>
        </div>
    </div>
</template>

<script type="text/babel">

    import List from './components/List.vue'
    import Buttons from './components/Buttons.vue'
    import Message from './components/Message.vue'
    import Storage from './util/storage'

    const storageName = 'todo-app';
    export default {
        name: 'app',
        data () {
            return {
                newTodo:'',
                todos: [],
                status: 'ALL',
                _id:0
            }
        },
        watch:{
            todos(){
               this.save()
            },
            status(){
                this.save()
            }
        },
        created(){
            let state = Storage.fetch(storageName);
            if(state) {
                this.todos = state.todos;
                this.status = state.status;
                this._id = state._id;
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
                this.todos = [...this.todos, {
                    text: this.newTodo,
                    done:false,
                    id: this._id++
                }];
                this.newTodo = '';
            },
            setStatus(status){
                this.status = status;
            },
            clearDone(){
                this.todos = this.todos.filter(todo => !todo.done);
                this.status = 'ALL'
            },
            removeTodo(id){
                this.todos = this.todos.filter(todo => todo.id !== id);
            },
            allDone(){
                this.todos = this.todos.map(todo => {
                    return Object.assign(todo, {
                        done:true
                    })
                });
                this.status = 'ALL'
            },
            save(){
                Storage.save(storageName, {
                    todos:this.todos,
                    status: this.status,
                    _id: this._id
                })
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