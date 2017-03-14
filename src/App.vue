<template>
    <div id="app">
        <md-toolbar>
            <h1 class="md-title" >Todo list</h1>
            <md-layout md-row md-flex="1" md-align="end">
                <md-button @click.native="clearDone" class="md-default"><md-icon>delete</md-icon> Clear All Done</md-button>
                <md-button @click.native="allDone" class="md-default"><md-icon>edit</md-icon> Mark all as done</md-button>
            </md-layout>
            <!--<message :status="status" :count="todos.length"></message>-->

        </md-toolbar>
        <main>
            <md-layout md-gutter md-column>
                <md-layout md-row md-gutter="16">
                    <md-layout md-flex="1">
                        <md-input-container v-show="status !== 'DONE'">
                            <label>What are you going to do?</label>
                            <md-input placeholder="New Todo" @keyup.enter.native="addTodo" v-model="newTodo"></md-input>
                        </md-input-container>
                    </md-layout>
                    <md-layout md-flex="20">
                        <status @newStatus="setStatus" :status="status"></status>
                    </md-layout>
                </md-layout>

                <list
                        :todos="showTodos"
                        @saveChange="save"
                        @removeTodo="removeTodo">
                </list>

            </md-layout>
        </main>
    </div>
</template>

<script type="text/babel">

    import List from './components/List.vue'
    import Status from './components/Status.vue'
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
            Status,
            Message
        }
    }
</script>

<style>
    #app{
        font-family:'Roboto', sans-serif;
    }
    .md-gutter:not(.md-column)>.md-layout {
        padding-right: 12px;
        padding-left: 12px;
    }
    .done{
        text-decoration: line-through;
    }
    main {
        padding: 0 16px;
    }
</style>