<template>
        <li>
            <div
                :class="{bold: isFolder}"
                @click="toggle"
                @dblclick="changeType">
                {{model.name}}

                <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <item
                    class="item"
                    v-for="model in model.children"
                    :model="model">
                </item>

                <li @click="addChild">+</li>
            </ul>
        </li>
</template>
<script>
    import itemt from './treeItem'
    export default{
        props: {
            model: Object
        },
        data () {
            return {
                open: false
            }
        },
        computed: {
            isFolder () {
                return this.model.children &&
                    this.model.children.length
            }
        },
        ready () {
            console.log('check')
        },
        methods: {
            toggle () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType () {
                if (!this.isFolder) {
                    this.$set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        },
        components: {
            item: itemt
        }
    }
</script>
