<template>
    <md-input-container>
        <label for="status">Status</label>
        <md-select name="status" id="status" @change="setStatus" :value="status">
            <md-option value="ALL">ALL</md-option>
            <md-option value="IN_PROGRESS">IN PROGRESS</md-option>
            <md-option value="DONE">DONE</md-option>
        </md-select>
    </md-input-container>
</template>
<script type="text/babel">

    export default {
        name:'status',
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