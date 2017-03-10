<template>
    <div class="hello">
        <ul>
            <li v-for="(todo, index) in todos" :key="todo.text + index">
                <input type="checkbox" v-model="todo.done" :id="'task' + index">
                <label
                        :for="'task' + index"
                        :class="{done: todo.done}">
                    {{todo.text}}
                </label>
            </li>


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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
