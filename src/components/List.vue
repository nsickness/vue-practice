<template>
    <div class="hello">
        <md-list>
            <transition-group name="fade">
                <md-list-item v-for="(todo, index) in todos" :key="todo.text + index">
                        <md-checkbox style="flex:100%" v-model="todo.done" :id="'task' + index" @change.native="saveChange"> <span :class="{done: todo.done}">{{todo.text}}</span></md-checkbox>

                    <md-button class="md-dense" @click.native="removeTodo(todo.id)">
                        remove
                    </md-button>
                    <md-divider></md-divider>
                </md-list-item>
            </transition-group>
        </md-list>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props:{
            todos:{
                type:Array,
                default:[]
            }
        },
        methods:{
            saveChange(){
                this.$emit('saveChange')
            },
            removeTodo(id){
                this.$emit('removeTodo', id)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .md-checkbox-label{
        width: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: .2s ease-out
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
