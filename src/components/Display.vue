<template>
    <div class="count">
        <h3>Count is {{counterValue}}</h3>
        <p>我在修改内容</p>
    </div>
</template>
<script>
    import { getCount } from '../vuex/getters'

    export default {
        vuex: {
            getters: {
                counterValue: getCount
            }
        }
    }
</script>

