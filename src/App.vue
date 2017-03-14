<template>
    <div id="app">
        <md-toolbar>
            <router-link class="md-button md-theme-default" to="/">Home <md-ink-ripple /></router-link>
            <router-link class="md-button md-theme-default" to="/archive">Archive <md-ink-ripple /></router-link>
        </md-toolbar>
        <transition name="fade">
            <router-view></router-view>
        </transition>
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

            }
        }
    }
</script>

<style>

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
    .md-checkbox-label{
        width: 100%;
    }
    .fade-up-enter-active,.fade-up-leave-active {
        transition: .2s ease-out;
        z-index:0
    }
    .fade-up-enter, .fade-up-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
    .fade-enter-active{
        transition: .4s ease-out
    }
    .fade-leave-active{
        display: none;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }


</style>