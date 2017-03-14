<template>
    <div>
        <h1 class="md-title" v-if="count === 0"> like a rolling stone </h1>
        <h1 class="md-title" v-else-if="status === 'DONE'">so far so good, keep going!</h1>
        <h1 class="md-title" v-else>hurry up! there's a lot of things to do!</h1>
    </div>
</template>
<script type="text/babel">

    export default {
        name: 'message',
        props: {
            status: {
                type: String,
                default: 'ALL'
            },
            count: {
                type: Number,
                default: 0
            }
        }
    }

</script>