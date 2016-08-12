<template>
    <div id="page">
        <form id="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <demo-grid
            :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery">
        </demo-grid>
    </div>
</template>
<style lang = 'scss'>
    input[name = 'query']{
        border: 1px solid #000;
        padding: 10px 20px;
        margin-bottom: 40px;
    }
</style>
<script>
    import demoGrid from '../components/demogrid.vue'
    export default {
        data () {
            return {
                searchQuery: '',
                gridColumns: ['name', 'power'],
                gridData: [
                    { name: 'Chuck Norris', power: Infinity },
                    { name: 'Bruce Lee', power: 9000 },
                    { name: 'Jackie Chan', power: 7000 },
                    { name: 'Jet Li', power: 8000 }
                ]
            }
        },
        components: {
            demoGrid
        }
    }
</script>
