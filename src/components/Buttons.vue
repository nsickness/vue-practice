<template>
   <div>
       <button :class="{active:status === 'ALL' }" @click="setStatus('ALL')">All</button>
       <button :class="{active:status === 'IN_PROGRESS' }" @click="setStatus('IN_PROGRESS')">In progress</button>
       <button :class="{active:status === 'DONE' }" @click="setStatus('DONE')">Done</button>
   </div>
</template>
<script type="text/babel">

    export default {
        name:'buttons',
        methods:{
            setStatus(status){
                this.$emit('newStatus', status)
            }
        },
        props:{
            status:{
                type:String,
                default:'ALL'
            }
        }
    }

</script>

<style scoped>
    .active{
        border-color:blue;
    }
</style>