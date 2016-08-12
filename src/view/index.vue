<template>
    <div id="page">
        <Display></Display>
        <Increment></Increment>
    </div>
</template>
<style lang = 'scss'>
    @import '../assets/index.scss'
</style>
<script>
    import Display from '../components/Display.vue'
    import Increment from '../components/Increment.vue'

    import store from '../vuex/store'

    export default {
        data () {
            return {
                list: {}
            }
        },
        method: {
            getList () {
                console.log()
            }
        },
        components: {
            Display: Display,
            Increment: Increment
        },
        store: store
    }
</script>
