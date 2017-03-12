<template>
    <div class="hello">
        <ul>
            <transition-group name="fade">
            <li v-for="(todo, index) in todos" :key="todo.text + index">
                <input type="checkbox" v-model="todo.done" :id="'task' + index" @change="saveChange">
                <label
                        :for="'task' + index"
                        :class="{done: todo.done}">
                    {{todo.text}}
                </label>
                <a href="#" @click.prevent="removeTodo(todo.id)">remove</a>

            </li>
            </transition-group>
        </ul>
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
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: .2s ease-out
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
