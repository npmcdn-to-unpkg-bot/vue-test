<template>
    <div id="page">
    <ul id="demo">
        <item
            class="item"
            :model="treeData">
        </item>
    </ul>
    </div>
</template>
<script>

    import itemt from '../components/treeItem.vue'   

    import {tdata} from '../assets/tdata.js'

    export default{
        data () {
            return{
                treeData: tdata
            }
        },
        components: {
            item: itemt
        }
    }
</script>
